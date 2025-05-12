import styles from "./Criar.module.css"
import Home from "../layout/Home.jsx"
function Criar(){
    return(
        <div className="bg-dark text-light w-100 h-100 position-absolute d-flex flex-column">
            <Home/>
            <h1 className="d-flex align-items-center justify-content-center mt-5">Criar</h1>
            <form className={`d-flex w-100 h-100 align-items-center flex-column ${styles.formulario} mt-5 gap-3`}>
                <label className="form-control bg-dark text-light w-50">Link da Imagem:</label>
                <input type="text" className="form-control bg-dark text-light w-50"/>
                <button className="btn btn-success">Publicar</button>
            </form>
        </div>
    )
}
export default Criar