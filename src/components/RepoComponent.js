import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react bootstrap
import Card from 'react-bootstrap/Card'

const RepoComponent = ({ repo }) => {

    // redux hooks
    const dispatch = useDispatch()

    return(
        <Card>
            <div>
                <input type='checkbox'
                       onClick={() => dispatch({type: 'ADD_CHECKED_REPO', checkedRepo: repo.name})}
                />  {repo.name}
            </div>
        </Card>
    )
}

export default RepoComponent