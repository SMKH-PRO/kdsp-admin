import React from 'react'

const NotFound404 = () => {
    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: window.innerHeight / 2 }}>
            <div>
                <img style={{maxWidth:'100%'}} src={require('../../Assets/Images/404.png').default} />
                <p style={{ textAlign: 'center' }}>404 NOT FOUND!</p>
            </div>
        </div>
    )
}

export default NotFound404
