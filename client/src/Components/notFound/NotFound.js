import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


const NotFound = props => {
    return (
        <div>
            <h1> 404 Page Not Found</h1>
            <Link to="/">Back</Link>
        </div>
    )
}

NotFound.propTypes = {

}

export default NotFound
