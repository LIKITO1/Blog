import "./App.css"
import Menu from "./components/layout/Menu"
import Post from "./components/layout/Post"
import Account from "./components/layout/Account"
import Box from "./components/layout/Box"
function App(){
  const logado=localStorage.getItem("logado")
  function btnLogin(){
    window.location="/login"
  }
  function btnCadastro(){
    window.location="/cadastro"
  }
  return (
    <>
      <div className={`bg-dark h-100 w-100 position-absolute`}>
        {logado&&(
          <>
            <Account/>
            <Menu/>
            <div className={`container d-flex align-items-center justify-content-center h-100`}>
              <Post/>
            </div>
          </>
          )
        }
        {!logado&&(
          <Box text="Random Blog" btn1="Login" on1={btnLogin} btn2="Cadastro" on2={btnCadastro}/>
        )}
      </div>
    </>
  )
}
export default App