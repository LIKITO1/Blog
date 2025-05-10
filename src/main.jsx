import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Criar from "./components/pages/Criar.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <Router>
  <StrictMode>
    <Routes>
      <Route element={<App/>} path='/'></Route>
      <Route element={<Criar/>} path="/criar"></Route>
    </Routes>
  </StrictMode>
  </Router>
)