import React from 'react'

// react bootstrap
import Card from 'react-bootstrap/Card'

const RepoComponent = ({ repo }) => {
    return(
        <Card>
            {repo.name}
        </Card>
    )
}

export default RepoComponent