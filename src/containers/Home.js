import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react bootstrap
import Container from 'react-bootstrap/Container'

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
    }, [])

    return (
        <Container>
            {repos.map(repo => <RepoComponent key={repo.id} repo={repo} /> )}
        </Container>
    )
}

export default Home