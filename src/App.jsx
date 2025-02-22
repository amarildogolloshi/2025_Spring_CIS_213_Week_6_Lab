import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GiphyForm from './components/GiphyForm'
import GiphyAPISearch from './components/GiphyAPISearch'
import axios from 'axios'

function App() {
  const  apiKey = 'DuEmcsDK1Q3XkzHVTQE0iZzjcKPtAVof';
  const [query, setQuery] = useState("");
  const [gif , setGif] = useState(null);
  

  useEffect( () => {
    console.log("useEffect")
    console.log(query);
    
    const fetchData = async () => {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1`);
      setGif(response.data.data[0]);

    }

    fetchData();


  }, [query] );

  return (
    <div className='container'>
      <GiphyForm query={query} setQueryApp={setQuery} / >

      {
        typeof gif === 'object' && gif !== null ? (
          <GiphyAPISearch gif={gif} />
        ) : null
      }
    </div>
  )
}

export default App
