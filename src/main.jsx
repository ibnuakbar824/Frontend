import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import Button from './componen/Button'
import Ujicoba from './Pages/Ujicoba'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UpdateState from './componen/UpdateState.jsx'
import EventHandling from './Pages/EventHandling.jsx'
import UseEffect from './Pages/UseEffect.jsx'
import FetchApi from './componen/FetchApi.jsx'
import ReactContext from './Pages/ReactContext.jsx'
import { MyContext } from './Pages/MyContext.jsx'
import Animasi from './componen/Animasi.jsx'
import GetMaba from './componen/Admind/GetMaba.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Utama/> */}
  {/* <Navbar/> */}
  {/* <Sidebar/> */}
  {/* <Layout/> */}
  {/* <Home/> */}
  {/* <Button/> */}
  {/* <Ujicoba/> */}
 <BrowserRouter>
    <App/>
    
 </BrowserRouter>

  
  </React.StrictMode>,
)
