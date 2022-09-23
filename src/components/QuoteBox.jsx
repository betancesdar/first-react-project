import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuotes,randomColor,getRandomAll}) => {
   
    const letterColor = {
        color: randomColor
    }
    
    const backgroundColor = {
        backgroundColor: randomColor
    }
  
    return (

    <article style={letterColor} className='card'>
        <p className='card_qoute'>{randomQuotes.quote}</p>
        <h1 className='card_author'>{randomQuotes.author}</h1>
        <Button backgroundColor={backgroundColor} getRandomAll={getRandomAll}/>
    </article>
  )
}

export default QuoteBox