import React from 'react'
import {useNavigate} from 'react-router-dom'
import {signedIn} from '../Login/useToken'


export default function Confirm() {
    const navigate = useNavigate();

    if(!signedIn()) {
        navigate('/login')
      }
    return (
        <div>
            <h1>Order confirmed!</h1>
        </div>
    )
}
