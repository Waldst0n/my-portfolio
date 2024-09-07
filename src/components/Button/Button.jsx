import React from 'react'

const Button = ({name, link ,icon}) => {
  return (
    <>
       
        <a className='text-white text-lg  font-bold bg-pink p-2 h-10 w-36 transition-all hover:delay-75 hover:rounded-2xl' 
        href={link} 
        target='_blank'>
             <p className='flex items-center justify-center gap-2'>{icon}{name}</p>
        </a>
    </>
  )
}

export default Button