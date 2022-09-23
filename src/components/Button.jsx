import React from 'react'

const Button = ({backgroundColor,getRandomAll}) => {

  


  return (
    <button onClick={getRandomAll} style={backgroundColor} className='card_btn'>Next</button>
  )
}

export default Button