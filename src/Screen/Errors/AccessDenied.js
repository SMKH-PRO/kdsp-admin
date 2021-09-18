import React from 'react'
import { Button } from "@material-ui/core";
import firebase from "../../Config";
import { useHistory } from 'react-router-dom';

const AccessDenied = () => {
    let history = useHistory()
    const logOut = async () => {
        await firebase.auth().signOut();
        history.push("/login");
    };

    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: window.innerHeight / 2 }}>
            <div style={{ textAlign: 'center' }}>
                <img style={{ maxWidth: '100%' }} src={require('../../Assets/Images/accessdenied.png').default} />
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, color: '#f68246' }}>ACCESS DENIED</p>
                <p style={{ textAlign: 'center', textTransform: 'uppercase' }}>Authorized Personnel Only</p>

                <Button style={{margin:10}} onClick={logOut} color="secondary" variant="contained">
                    LOG OUT
                </Button>
            </div>
        </div>
    )
}

export default AccessDenied
