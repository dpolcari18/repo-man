import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react bootstrap
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

// components
import RepoComponent from '../components/RepoComponent'

// endpoint
const API_ENDPOINT = 'https://api.github.com'

// credentials
const USERNAME = process.env.REACT_APP_USERNAME
const TOKEN = process.env.REACT_APP_OAUTH_TOKEN

const Home = () => {

    // redux hooks
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.repos)

    // local state
    const [page, setPage] = useState(1)

    useEffect(async () => {

        const fetchObj = {
            Headers: {
                "Authorization": `token ${TOKEN}`
            }
        }

        const fetchUser = await fetch(API_ENDPOINT + '/users/' + USERNAME + `/repos?page=${page}&per_page=100`)
        const repos = await fetchUser.json()
        
        dispatch({ type: 'ADD_REPOS', repos: repos})
    }, [page])

    const handlePrevious = () => {
        if (page === 1) {return} else {setPage(page - 1)}
    }

    const handleNext = () => {
        if (repos.length < 100) {return} else  {setPage(page + 1)}
    }

    return (
        <Container>
            {repos.map(repo => <RepoComponent key={repo.id} repo={repo} /> )}
            <ButtonGroup>
                <Button onClick={() => handlePrevious()} disabled={page === 1}>
                    Previous
                </Button>
                <Button onClick={() => handleNext()} disabled={repos.length < 100}>
                    Next
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default Home