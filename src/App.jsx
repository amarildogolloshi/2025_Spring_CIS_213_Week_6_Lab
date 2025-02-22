import { useEffect, useState } from 'react'
import './App.css'
import GiphyForm from './components/GiphyForm'
import GiphyAPISearch from './components/GiphyDisplay'
import Header from './components/Header'

function App() {
  const  apiKey = 'DuEmcsDK1Q3XkzHVTQE0iZzjcKPtAVof';
  const [query, setQuery] = useState("cat");
  const [gif , setGif] = useState(null);
  
  useEffect( () => {
    if (query){
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1`)
      .then( (response) => response.json() )
      .then( (json) => {
        setGif(json.data[0])
      })
      .catch( (error) => {
        console.log('Error fetching data:', error);
      })
    }
  }, [query] );

  return (
    <div className='container'>
      <Header />
      <GiphyForm query={query} setQueryApp={setQuery} />

      {
        typeof gif === 'object' && gif !== null ? (
          <GiphyAPISearch gif={gif} />
        ) : null
      }
    </div>
  )
}

export default App
