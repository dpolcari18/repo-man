import React from 'react'

// redux
import { useSelector } from 'react-redux'


// react bootstrap
import Button from 'react-bootstrap/Button'

const DeleteButton = () => {

    const reposToDelete = useSelector(state => state.repos.checkedRepos)

    const deleteRepos = async () => {
        reposToDelete.forEach(repo => console.log(repo))
    }

    return (
        <Button onClick={() => deleteRepos()}>
            Delete
        </Button>
    )
}

export default DeleteButton