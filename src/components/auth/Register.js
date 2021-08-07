import React from 'react'

const Register = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-secondary">Registrar</button>

                        </div>
                    </form>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default Register
