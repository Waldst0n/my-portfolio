import { NavLink } from 'react-router-dom'
import image from '../img/1694174514925.jpeg'

import { HiOutlineDownload } from "react-icons/hi";


const Navbar = () => {
  return (
    <nav className='bg-tertiaryColor w-screen h-16 flex items-center fixed justify-between  mb-3'>
        <div className='flex items-center justify-between w-full  gap-2 px-5 py-3'>
            <NavLink className='flex items-center gap-4' to='/'>
                <img className='size-12 rounded-full' src={image} alt="" />
                <h1 className='font-bold'>Waldston Santana</h1>
            
            </NavLink>
        
        
            
            <ul className='flex gap-10 items-center  '>
            <li>
                    <NavLink to='projects'><p className='rounded-none py-2 px-4 hover:transition-all hover:delay-75 hover:rounded-2xl hover:bg-pink hover:text-tertiaryColor '>Projetos</p></NavLink>
                </li>
                <li>
                    <a className=' flex gap-2 items-center rounded-none py-2 px-4 hover:transition-all hover:delay-75 hover:rounded-2xl hover:bg-pink hover:text-tertiaryColor ' href="https://drive.google.com/file/d/1Wp87K9Npz4H2YCxwVtY5e0FAhtgTOr-z/view?usp=drive_link" target='_blank' >Currículo<HiOutlineDownload /></a>
                </li>
                
            </ul>
        
        </div>
       
    </nav>
  )
}

export default Navbar