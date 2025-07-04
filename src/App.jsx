
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Pages/SharePage/Footer/Footer'
import Navber from './Pages/SharePage/Navber/Navber'

function App() {
 

  return (
    <div className='max-w-7xl mx-auto'>
    <Navber/>
    <Outlet/> 
    <Footer/>
    </div>
  )
}

export default App
