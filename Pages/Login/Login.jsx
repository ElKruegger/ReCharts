import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
var email = 'adm';
var password = 'Master1234';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const dadosFixos = {
            email: 'adm@gmail.com',
            password: 'Master1234'
        };

        if (email === dadosFixos.email && password === dadosFixos.password) {
            navigate('/home');
        } else {
            console.log('Dados de login incorretos');
        }
    };

    return (

        <div className="Formulary-div">
            <div className="form-container">

                <h1>
                    Manage your metrics
                </h1>

                <div>
                    <span> Email</span>
                </div>
                <div className="Email-form-div">
                    <form className='Email-Form' onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            placeholder='example@gmail.com'
                            required
                        />
                    </form>
                </div>
                <div>
                    <span> Senha</span>
                </div>
                <div className="Password-form-div">
                    <form className='Password-Form' onSubmit={handleSubmit}>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            autoComplete='off'
                            placeholder='********'
                            required
                        />
                    </form>
                </div>
                <button className="Login-button" onClick={handleSubmit}> Login </button>
            </div>
            <div className='Right-Container'>
                <div>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&icon_names=cadence" />
                </div>
                <span className="material-symbols-outlined">cadence</span>
            </div>
        </div>
    );
}
export default Login;