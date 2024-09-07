import React, { useEffect, useState } from 'react'

const Typewriter = (props) => {
    const [text, setText] = useState("");

    const writer =(text, i = 0) => {
        if(i < text.length) {
            setText(text.slice(0,i +1));
            setTimeout(() => writer(text, i + 1), 100);
        };
    }

    useEffect(() =>{
        setTimeout(() => writer(props.text))
    },[])

  return (
    <div className='text-tertiaryColor '>
        <h1 className='text-4xl'>{text}</h1>
    </div>
  )
}

export default Typewriter