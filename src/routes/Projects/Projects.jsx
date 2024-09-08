import React from 'react'
import image from '../../img/images.jpg'
import Card from '../../components/Card/Card'

const Projects = () => {
  return (
    <div className='flex flex-col text-center  items-center justify-center pt-32 max-w-screen'>
      <div>
        <h1 className="text-tertiaryColor text-4xl mb-14 ">Meus trabalhos</h1>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 '>
        <Card 
        image={image}
        title="Meu projeto 1"
        description="Site institucional criado com React" />
         <Card 
        image={image}
        title="Meu projeto 1"
        description="Site institucional criado com React" />
         <Card 
        image={image}
        title="Meu projeto 1"
        description="Site institucional criado com React" />
         <Card 
        image={image}
        title="Meu projeto 1"
        description="Site institucional criado com React" />
         <Card 
        image={image}
        title="Meu projeto 1"
        description="Site institucional criado com React" />
         <Card 
        image={image}
        title="Meu projeto 1"
        description="Site institucional criado com React" />
      </div>

      <a className='text-tertiaryColor p-4 h-2 bg-pink  font-bold mt-4 flex items-center justify-center transition-all hover:delay-75 hover:rounded-xl' href="https://github.com/Waldst0n?tab=repositories" target='_blank'>Ver Todos</a>
      

      
    </div>
  )
}

export default Projects