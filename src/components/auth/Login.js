import React from 'react'

const Login = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-success">Iniciar Sesión</button>

                        </div>
                    </form>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default Login
