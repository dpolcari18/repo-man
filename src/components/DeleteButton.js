import React from 'react'

// redux
import { useSelector } from 'react-redux'


// react bootstrap
import Button from 'react-bootstrap/Button'

// credentials
const TOKEN = process.env.REACT_APP_OAUTH_TOKEN

const DeleteButton = () => {

    const reposToDelete = useSelector(state => state.repos.checkedRepos)

    const deleteRepos = () => {
        
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
        
        reposToDelete.forEach(repo => {
            delMethod(repo)
        })
    }

    return (
        <Button onClick={() => deleteRepos()}>
            Delete
        </Button>
    )
}

export default DeleteButton