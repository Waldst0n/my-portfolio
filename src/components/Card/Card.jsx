import React from 'react'

const Card = ({image, title, description, link}) => {
  return (
    <>
         <div className='max-w-60 flex flex-col rounded mb-4 overflow-hidden shadow-lg bg-tertiaryColor'>
            <img className='w-full' src={image} alt="" />
            <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{title}</div>
            <p className='text-gray-700 text-base'>{description}</p>
            <a  className='text-pink font-bold text-lg   transition-all delay-75 text-opacity-85 hover:text-opacity-100 ' href="#">acesse</a>
          </div> 
            
        </div>
    </>
  )
}

export default Card