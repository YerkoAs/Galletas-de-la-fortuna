import React from 'react'
import './Phrase.css'
const Phrase = ({rPhrase}) => {
   
    const {author, phrase} = rPhrase;
    const appStyle = {
      backgroundImage : 'url(../fortuna-1/rectangle1.svg)',
      
    
    }

  return (
    <div style={appStyle} className='phrase-container'>
      <p className='phrase'>{phrase}</p>
      <p className='author'>{author}</p>
    </div>
  )
}

export default Phrase 