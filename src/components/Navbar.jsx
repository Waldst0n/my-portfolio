import { NavLink } from 'react-router-dom'
import image from '../img/1694174514925.jpeg'

const Navbar = () => {
  return (
    <nav className='bg-tertiaryColor w-screen h-16 flex items-center justify-between fixed'>
        <div className='flex items-center gap-4 px-5 py-3'>
            <NavLink className='flex items-center gap-4' to='/'>
                <img className='size-12 rounded-full' src={image} alt="" />
                <h1 className='font-bold'>Waldston Santana</h1>
            
            </NavLink>
        </div>
        <div>
            <ul className='flex gap-12'>
                <li>
                    <NavLink to='about'><p className='rounded-none py-2 px-4 hover:transition-all hover:delay-75 hover:rounded-2xl hover:bg-pink hover:text-tertiaryColor '>About</p></NavLink>
                </li>
                <li>
                    <NavLink to='projects'><p className='rounded-none py-2 px-4 hover:transition-all hover:delay-75 hover:rounded-2xl hover:bg-pink hover:text-tertiaryColor '>Projetos</p></NavLink>
                </li>
            </ul>
        </div>
        <div>

        </div>
    </nav>
  )
}

export default Navbar