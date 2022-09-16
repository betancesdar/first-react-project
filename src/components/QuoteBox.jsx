import React from 'react'

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
        <blockquote className='card_author'>{randomQuotes.author}</blockquote>
        <button onClick={getRandomAll} style={backgroundColor} className='card_btn'>&#62;</button>
    </article>
  )
}

export default QuoteBox