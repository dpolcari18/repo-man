import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react bootstrap
import Card from 'react-bootstrap/Card'

const RepoComponent = ({ repo }) => {

    // redux hooks
    const dispatch = useDispatch()
    const checkedRepos = useSelector(state => state.repos.checkedRepos)

    const handleClick = (e) => {
        if (checkedRepos.includes(e.target.value)) {
            dispatch({type: 'REMOVE_CHECKED_REPO', checkedRepo: e.target.value})
        } else {
            dispatch({type: 'ADD_CHECKED_REPO', checkedRepo: e.target.value})
        }
    }

    return(
        <Card>
            <div>
                <input type='checkbox'
                       value={repo.name}
                       onClick={(e) => handleClick(e)}
                />   {repo.name}
            </div>
        </Card>
    )
}

export default RepoComponent