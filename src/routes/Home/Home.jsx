import Button from "../../components/Button/Button"
import Typewriter from "../../components/Typewriter/Typewriter"
import image from '../../img/ilustracao-colorida-de-programador-trabalhando.png'

import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Home = () => {
  return (
    <section >
    <div className="flex items-center h-screen md:flex justify-around max-w-screen m-auto " >
      <div className="flex flex-col text-center w-1/2 m-2 "  >
        <h2 className="text-tertiaryColor m-2">Olá, Me chamo Waldston Santana!</h2>
        <Typewriter text='Desenvolvedor Front-end' />
        <p className="text-tertiaryColor text-wrap text-center mt-4 p-2 text-md">Sempre em busca de novos conhecimentos. Sou Cristão, esposo, pai, amo tecnologia e também tocar uma guitarrinha!🎸</p>
        <div className=" container mt-10 flex flex-col md:flex-row p-3  items-center justify-center gap-3 " >
        <Button 
        name='Whatsapp'
        link='https://wa.me/+5579988232693?text=Ol%C3%A1!%20Tudo%20bem?'
        icon={<RiWhatsappFill />}
        />
        <Button 
        name='Linkedin'
        link='https://www.linkedin.com/in/waldston-santana/'
        icon={<FaLinkedin />}/>
        <Button 
        name='Github'
        link='https://github.com/Waldst0n'
        icon={<FaGithub />}
        />
        </div>

      </div>
      <div className=" hidden lg:flex items-center flex-col text-center w-1/2 m-2 "  >
        <img src={image} alt="" className="size-1/2 md:hi"  />
        
      </div>  

    </div>
    </section>
  )
}

export default Home