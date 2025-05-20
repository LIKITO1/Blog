import {useState} from "react"
import {Link} from "react-router-dom"
import styles from "./Perfil.module.css"
function Perfil(){
    const [logado,setLogado]=useState()
    return(
        <>
            <div className={`container h-50 p-5 rounded-5 position-absolute d-flex align-items-center justify-content-around flex-column bg-black ${styles.cont}`}>
                {logado&&(
                    <p>Você esta logado</p>
                )}
                {!logado&&(
                    <>
                        <Link to="/cadastro" className="text-center text-light text-decoration-none border border-white p-3 rounded-5 w-100">Ainda não tenho uma conta</Link>
                        <Link to="/login" className="text-center text-light text-decoration-none border border-white p-3 rounded-5 w-100">Entrar na minha conta</Link>
                    </>
                )}
            </div>
        </>
    )
}
export default Perfil