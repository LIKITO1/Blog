function Box({text,btn1,btn2,on1,on2}){
    return(
        <div className="w-50 h-50 position-absolute bg-primary text-light rounded-5 d-flex align-items-center justify-content-center flex-column gap-5" style={{marginTop:"20vh",marginLeft:"25vw"}}>
            <h1>{text}</h1>
            {(btn1||btn2)&&(
            <div className="w-100 d-flex align-items-center justify-content-center flex-row gap-3" style={{height:"10vh"}}>
                {btn1&&(
                    <button className="btn bg-dark text-light" onClick={on1}>{btn1}</button>
                )}
                {btn2&&(
                    <button className="btn bg-dark text-light" onClick={on2}>{btn2}</button>
                )}
            </div>
            )}
        </div>
    )
}
export default Box;