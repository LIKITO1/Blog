import "./App.css"
import Menu from "./components/layout/Menu"
import Post from "./components/layout/Post"
import Account from "./components/layout/Account"
function App(){
  return (
    <>
      <div className={`bg-dark h-100 w-100 position-absolute`}>
            <Account/>
            <Menu/>
            <div className={`container d-flex align-items-center justify-content-center h-100`}>
              <Post/>
            </div>
      </div>
    </>
  )
}
export default App