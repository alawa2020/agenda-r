import React, { useState } from 'react';
import { auth } from '../../firebase/auth';
import { useHistory } from 'react-router-dom';

import MsgError from './MsgError';
const Register = ({setViewLogin}) => {
  const historial = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msgError, setMsgError] = useState(null);

  const onClickButtonRegisterUser = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, pass).
        then((res) => {
            console.log(res);
            alert('Usuario Registrado.\n Inicie sesión.')
            setViewLogin(true);
        }).
        catch( err => {
            console.log(err);
            if (err.code == 'auth/invalid-email') {
              setMsgError('Email inválido.');
              return;
            }
            if (err.code == 'auth/weak-password'){
                setMsgError('The password must be 6 characters long or more.');
              return;
            }
            if (err.code == 'auth/email-already-in-use'){
                setMsgError('The email address is already in use by another account.');
              return;
            }
        });

  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={onClickButtonRegisterUser}
              >
                Registrar
              </button>
            </div>
          </form>
          <MsgError msgError={msgError} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Register;
