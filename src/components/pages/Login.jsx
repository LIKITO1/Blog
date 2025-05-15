function Login(){
    return(
        <div className="bg-dark w-100 h-100 position-absolute">
            <form className="card border-white container p-5 mt-5 gap-3 d-flex align-items-center justify-content-center flex-column bg-dark text-light">
                <h1>Login</h1>
                <label>Nome:</label>
                <input type="text" className="form-control w-75 bg-dark text-light" autoComplete="username" required></input>
                <label>Email:</label>
                <input type="email" className="form-control w-75 bg-dark text-light" autoComplete="off" required></input>
                <label>Senha:</label>
                <input type="password" className="form-control w-75 bg-dark text-light" autoComplete="currrent-password" required></input>
                <button type="submit" className="btn btn-success w-50">Logar</button>
            </form>
        </div>
    )
}
export default Login