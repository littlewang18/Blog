import React from 'react'
import LogPut from '../../components/LogPut'
import index from './index.module.css'

function Login() {
    return (
        <div className = {index.container}>
            <div className = {index.logbox}>
                <LogPut />
            </div>
        </div>
    )
}

export default Login
