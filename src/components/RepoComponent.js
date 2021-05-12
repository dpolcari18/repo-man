import React from 'react'

// react bootstrap
import Card from 'react-bootstrap/Card'

const RepoComponent = ({ repo }) => {
    return(
        <Card>
            <div>
                <input type='checkbox'
                       onClick={dispatc({})}
                />  {repo.name}
            </div>
        </Card>
    )
}

export default RepoComponent