import React from 'react'
import image from '../../img/Logotipo empresa de programação sistemas e tecnologia.png'
import okanban from '../../img/o-kanban.png'
import Card from '../../components/Card/Card'

import { FaHtml5 } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className="flex flex-col text-center  items-center justify-center pt-32 max-w-screen">
            <div>
                <h1 className="text-tertiaryColor text-4xl mb-14 ">
                    Meus trabalhos
                </h1>
            </div>

            <div className=" grid grid-cols-1  items-center justify-center gap-5 ">
                <Card
                    image={image}
                    title="Task Manager"
                    description="Projeto fullstack criado com nodeJs e React"
                    link={
                        'https://gerenciador-de-tarefas-front-flax.vercel.app/'
                    }
                />
                <Card
                    image={okanban}
                    title="OKanban"
                    description="Quadro kanban criado com React"
                    link={'https://o-kanban-waldst0ns-projects.vercel.app/'}
                />
            </div>
            <a
                className="text-tertiaryColor p-4 mb-14 h-2 bg-pink  font-bold mt-4 flex items-center justify-center transition-all hover:delay-75 hover:rounded-xl"
                href="https://github.com/Waldst0n?tab=repositories"
                target="_blank"
            >
                Ver Todos
            </a>
        </div>
    )
}

export default Projects
