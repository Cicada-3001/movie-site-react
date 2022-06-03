import logo from './logo.svg';
import search from './search.svg';
import './App.css';
import {useState, useEffect} from 'react'
import MovieCard  from './Moviecard';


function App() {
const API_URL =' http://www.omdbapi.com/?i=tt3896198&apikey=fd206f9c'
  const object={
      Poster: "https://m.media-amazon.com/images/M/MV5BMDlmMmZhZjQtZDhlMi00MzU0LWIwYjMtNDRhOGE5YzczYjBmXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
      Title: "Hitman",
      Type: "movie",
      Year: "2007",
      imdbID: "tt0465494"
  }

  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm]= useState('hitman')

  const searchMovies= async (title) =>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json()
        setMovies(data.Search)
  }

  return (
    <div className='app'>
      <h1>De Theatre</h1>
      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        /> 
        <img 
          src={search}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies.length>0?
        (
           <div className="container">
           {movies.map((movie)=><MovieCard movie={movie}/>)}
           </div>
        ):(
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      </div>
  )
    
}

export default App;
