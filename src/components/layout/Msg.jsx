import styles from "./Msg.module.css"
function Msg({text,tipo}){
    return(
        <>
        {/* success,danger e warning são os tipos de texto já do bootstrap */}
            <div className={`text-${tipo} ${styles.message} bg-dark position-fixed w-50 top-0 mt-5 d-flex align-items-center justify-content-center blockquote rounded-4`}>{text}</div>
        </>
    )
}
export default Msg