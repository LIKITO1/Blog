import Perfil from "./Perfil"
import {useState} from "react"
function Account(){
    const [perfil,setPerfil]=useState(false)
    function abrirPerfil(){
        if(!perfil){
            setPerfil(true)
        }
        else{
            setPerfil(false)
        }
    }
    return(
        <div>
            <i className="bi bi-person-circle position-absolute" style={{fontSize:"5vw",color:"white",right:"7vw",top:"1vw",cursor:"pointer"}} onClick={abrirPerfil}></i>
            {perfil&&(
                <Perfil/>
            )}
        </div>
    )
}
export default Account;