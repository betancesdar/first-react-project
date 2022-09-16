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
        <h1 className='card_author'>{randomQuotes.author}</h1>
        <button onClick={getRandomAll} style={backgroundColor} className='card_btn'>Next</button>
    </article>
  )
}

export default QuoteBox