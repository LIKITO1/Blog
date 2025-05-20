import Msg from "../layout/Msg"
import {useState} from "react"
function Login(){
    const [msg,setMsg]=useState("")
    const [type,setType]=useState("")
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")
    async function logar(e){
        e.preventDefault();
        await fetch("http://localhost:5000/logar",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify([nome,email,senha])
        }).then((response)=>response.json()).then((res)=>{
            console.log(res)
        })
    }
    return(
        <div className="bg-dark w-100 h-100 position-absolute">
            <form className="card border-white container p-5 mt-5 gap-3 d-flex align-items-center justify-content-center flex-column bg-dark text-light">
                <h1>Login</h1>
                <label>Nome:</label>
                <input type="text" className="form-control w-75 bg-dark text-light" autoComplete="username" onChange={(e)=>setNome(e.target.value)}></input>
                <label>Email:</label>
                <input type="email" className="form-control w-75 bg-dark text-light" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Senha:</label>
                <input type="password" className="form-control w-75 bg-dark text-light" autoComplete="currrent-password" onChange={(e)=>setSenha(e.target.value)}></input>
                <button type="submit" onClick={logar} className="btn btn-success w-50">Logar</button>
            </form>
            {msg&&msg.length>0&&(
                <Msg text={msg} tipo={type}/>
            )}
        </div>
    )
}
export default Login