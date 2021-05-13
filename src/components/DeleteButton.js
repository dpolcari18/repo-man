import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'


// react bootstrap
import Button from 'react-bootstrap/Button'

// credentials
const TOKEN = process.env.REACT_APP_OAUTH_TOKEN

const DeleteButton = () => {

    // redux hooks
    const dispatch = useDispatch()
    const reposToDelete = useSelector(state => state.repos.checkedRepos)

    const cleanUpPage = () => {
        dispatch({ type: "REMOVE_REPOS"})
        
        dispatch({ type: "CLEAR_CHECKED_REPOS"})
    }

    const deleteRepos = () => {
        
        // fetch call to DELETE repo
        const delMethod = async (repo) => {
            const delObj = {
                headers: {
                    "Accept": 'application/vnd.github.v3+json',
                    "Authorization": `token ${TOKEN}`
                },
                method: "DELETE"
            }
            const deleteRepo = await fetch(`https://api.github.com/repos/dpolcari18/${repo}`, delObj)
    
        }
        
        // delete all checked repos
        reposToDelete.forEach(repo => {
            delMethod(repo)
        })

        // reset checked repos and remove repos from state list
        cleanUpPage()
    }

    return (
        <Button onClick={() => deleteRepos()}>
            Delete
        </Button>
    )
}

export default DeleteButton