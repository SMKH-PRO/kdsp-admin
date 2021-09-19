import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: window.innerHeight / 2 }}>
            <div>
                <img style={{ maxWidth: '80%' }} src={require('../../Assets/Images/404.png').default} />
                <p style={{ textAlign: 'center' }}>404 NOT FOUND!</p>

                <Link to="/">
                    <p style={{ fontSize: 30, textAlign: 'center' }}>BACK TO HOME</p>
                </Link>
            </div>
        </div>
    )
}

export default NotFound404
