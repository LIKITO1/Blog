import {useState,useEffect} from "react"
import styles from "./Post.module.css"
function Post(){
    const [liked,setLiked]=useState(false)
    const [classe,setClasse]=useState("star")
    const [star,setStar]=useState("star1")
    const [images,setImages]=useState([])
    const [image,setImage]=useState()
    useEffect(()=>{
        async function req(){
        await fetch("http://localhost:5000/api",{
            method:"GET"
        }).then((response)=>response.json()).then((res)=>{
            setImages(res)
        })
    }
    req()
    },[])
    const [random,setRandom]=useState(Math.floor(Math.random()*images.length))
    useEffect(()=>{
        setImage(images[random]?.src)
    },[random,images])
    function like(){
        if(!liked){
            setLiked(true)
            setClasse("star-fill")
            setStar("star")
        }else{
            setLiked(false)
            setClasse("star")
            setStar("star1")
        }
    }
    function trocar(){
        setRandom(Math.floor(Math.random()*images.length))
    }
    function salvar(){
        console.log("Salvar")
    }
    return(
        <>
            <div className={`d-flex flex-column card bg-dark p-4 border-white gap-2`}>
                <img style={{background:"white",width:"20vw",height:"70vh"}} src={image} onDoubleClick={like}></img>
                <div className={`d-flex flex-row gap-3`}>
                    <i className={`bi bi-${classe} ${styles.icone}`} onClick={like}></i>
                    <i className={`bi bi-share ${styles.icone}`}></i>
                    <i className={`bi bi-floppy ${styles.icone}`} onClick={salvar}></i>
                </div>
                <i className={`bi bi-star-fill ${styles[star]}`}></i>
            </div>
            <div className="d-flex flex-column mx-4 gap-5">
                <i className={`bi bi-arrow-repeat ${styles.btn}`} onClick={trocar}></i>
            </div>
        </>
    )
}
export default Post;