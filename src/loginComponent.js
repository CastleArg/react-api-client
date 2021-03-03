import React, { useState } from 'react';
const LoginComponent = (props) => {
    const [message, setMessage] = useState('try to login!!')
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const login = async () => {
        const myFetchSettings = {
            method: 'POST',
            body: JSON.stringify({ username: userName, password: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch('http://localhost:5000/auth/login', myFetchSettings
        )
        console.log(response)

        const newMessage = response.ok ? 'good job!' : 'bad job!';
        setMessage(newMessage)
    }

    const style = {
        padding: '20px'
    }
    return (<div style={style}>
        <input type='text' onChange={(e) => { setUserName(e.target.value) }} placeholder='username' />
        <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
        <button onClick={login}>login</button>
        <div>{message}</div>
    </div>);
}

export default LoginComponent;