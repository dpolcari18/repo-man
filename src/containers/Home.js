import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react bootstrap
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

// components
import RepoComponent from '../components/RepoComponent'
import DeleteButton from '../components/DeleteButton'
import Pagination from '../components/Pagination'

const Home = () => {

    // redux hooks
    const repos = useSelector(state => state.repos.repos)

    return (
        <Container>
            {repos.map(repo => <RepoComponent key={repo.id} repo={repo} /> )}
            <ButtonGroup>
                <Pagination/>
            </ButtonGroup>
            <ButtonGroup>
                <DeleteButton />
            </ButtonGroup>
        </Container>
    )
}

export default Home