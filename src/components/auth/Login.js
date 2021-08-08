import React, { useState } from 'react'
import {auth} from '../../firebase/auth';
import { useHistory } from 'react-router-dom';

import MsgError from './MsgError';

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [msgError, setMsgError] = useState(null);

    const historial = useHistory();

    const onClickLoginUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pass)
            .then( res => {
                historial.push('/agenda');
                console.log(res)
                alert('Ha iniciado sesión.');
            })
            .catch( err => {
                console.log(err);
                if(err.code == 'auth/invalid-email'){
                    setMsgError('Email inválido.');
                    return;
                }
                if(err.code == 'auth/wrong-password'){
                    setMsgError('Contraseña inválida.');
                    return;
                }

            })
    }


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                onChange={(e) => setPass(e.target.value)} 
                                value={pass}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button 
                                type="submit" 
                                className="btn btn-success"
                                onClick={onClickLoginUser}
                            >Iniciar Sesión</button>

                        </div>
                    </form>
                    <MsgError msgError={msgError} />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default Login
