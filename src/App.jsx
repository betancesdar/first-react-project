import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import color from './utils/colors'

function App() {
 

  const indexRandom = arr =>  parseInt(Math.random() * arr.length)
  const firstElemet = quotes[indexRandom(quotes)]
  const firstColor = color[indexRandom(color)]

  const [randomQuotes, setrandomQuotes] = useState(firstElemet)
  const [randomColor, setrandomColor] = useState(firstColor) 

  const styleQuote = {
    backgroundColor: randomColor
  }

  const getRandomAll = () =>  {
    setrandomQuotes(quotes[indexRandom(quotes)])
    setrandomColor(color[indexRandom(color)])
  }

  return (
    <div style={styleQuote} className="App">
      <QuoteBox 
      randomQuotes={randomQuotes}
      randomColor={randomColor}
      getRandomAll={getRandomAll}/>
    </div>
  )
}

export default App
