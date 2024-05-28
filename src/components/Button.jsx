import React from 'react'
import arr from '../utils/phrases.json'
import randomArr from '../Services/randomArr'
import img from '../utils/img.json';
import './Button.css'

const Button = ({setrPhrase, setimage}) => {

  const handleClick = () =>{
    const quote = randomArr(arr);
    setrPhrase(quote)

    const bgimage = randomArr(img);
    setimage(bgimage)


    

  }
  return (

    <button onClick={handleClick} className='btn'>ver otro</button>
  )
}

export default Button  