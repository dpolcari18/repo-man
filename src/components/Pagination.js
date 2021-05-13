import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react bootstrap
import Button from 'react-bootstrap/BUtton'

// endpoint
const API_ENDPOINT = 'https://api.github.com'

// credentials
const USERNAME = process.env.REACT_APP_USERNAME
const TOKEN = process.env.REACT_APP_OAUTH_TOKEN

const Pagination = () => {

    // redux hooks
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.repos)


    // local state
    const [page, setPage] = useState(1)

    // fetch repos
    useEffect(() => {
        const fetchRepos = async () => {     
            const fetchObj = {
                Headers: {
                    "Authorization": `token ${TOKEN}`
                }
            }
    
            const fetchUser = await fetch(API_ENDPOINT + '/users/' + USERNAME + `/repos?page=${page}&per_page=100`, fetchObj)
            const repos = await fetchUser.json()
            
            dispatch({ type: 'ADD_REPOS', repos: repos})
        }
        
        fetchRepos()
    }, [page])

    // move to previous page
    const handlePrevious = () => {
        if (page === 1) {return} else {setPage(page - 1)}
    }

    // move to next page
    const handleNext = () => {
        if (repos.length < 100) {return} else  {setPage(page + 1)}
    }

    return (
        <>
            <Button onClick={() => handlePrevious()} disabled={page === 1}>
                Previous
            </Button>
            <Button onClick={() => handleNext()} disabled={repos.length < 100}>
                Next
            </Button>
        </>
    )
}

export default Pagination