import styles from "./Menu.module.css"
import {Link} from "react-router-dom"
import {useState} from "react"
function Menu(){
    const [menu,setMenu]=useState()
    const [classe,setClasse]=useState("list")
    function clicou(){
        if(menu){
            setMenu(false)
            setClasse("list")
        }
        else{
            setMenu(true)
            setClasse("x-lg")
        }
    }
    return(
        <>
        <div className={`${styles.principal} mx-4 my-3 d-flex flex-column align-items-center justify-content-center gap-4 p-5`}>
                <i className={`bi bi-${classe} ${styles.icone} ${styles.menu}`} onClick={clicou}></i>
                {menu&&(
                <div className={`${styles.items} d-flex align-items-center justify-content-around flex-column my-2 mx-3 gap-5`}>
                    <Link className={`${styles.icone} ${styles.item}`} to="/"><i className={`bi bi-house`}></i></Link>
                    <Link className={`${styles.icone} ${styles.item}`} to="/criar"><i className={`bi bi-patch-plus-fill`}></i></Link>
                    <Link className={`${styles.icone} ${styles.item}`} to="/my"><i className={`bi bi-columns`}></i></Link>
                </div>
                )}
        </div>
        </>
    )
}
export default Menu;