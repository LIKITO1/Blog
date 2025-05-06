import {useState} from "react"
import styles from "./Post.module.css"
function Post(){
    const [liked,setLiked]=useState(false)
    const [classe,setClasse]=useState("star")
    function like(){
        if(!liked){
            setLiked(true)
            setClasse("star-fill")
        }else{
            setLiked(false)
            setClasse("star")
        }
    }
    return(
        <>
            <div className={`d-flex flex-column`}>
                <img style={{background:"white",width:"20vw",height:"70vh"}} src="https://i.pinimg.com/736x/06/98/fe/0698feb8215205db061fd8fa8570bb8f.jpg"></img>
                <div className={`d-flex flex-row gap-3`}>
                    <i className={`bi bi-${classe} ${styles.icone}`} onClick={like}></i>
                    <i className={`bi bi-share ${styles.icone}`}></i>
                </div>
            </div>
        </>
    )
}
export default Post;