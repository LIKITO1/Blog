import styles from "./Criar.module.css"
import Menu from "../layout/Menu"
import {useState} from "react"
function Criar(){
    const [link,setLink]=useState("")
        async function publicar(){
            await fetch("http://localhost:5000/publicar",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({link})
            })
        }
    return(
        <div className="bg-dark text-light w-100 h-100 position-absolute d-flex flex-column">
            <Menu/>
            <h1 className="d-flex align-items-center justify-content-center mt-5">Criar</h1>
            <form className={`d-flex w-100 h-100 align-items-center flex-column ${styles.formulario} mt-5 gap-3`}>
                <label className="form-control bg-dark text-light w-50 border-0">Link da Imagem:</label>
                <input type="text" className="form-control bg-dark text-light w-50" onChange={(e)=>{setLink(e.target.value)}}/>
                <button className="btn btn-success" onClick={publicar}>Publicar</button>
            </form>
        </div>
    )
}
export default Criar