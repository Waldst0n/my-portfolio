import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className=' flex flex-col bg-primaryColor '>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
