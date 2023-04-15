import './App.css';
import { getMovieList, searchMovie } from './Api'
import { useEffect, useState } from 'react';

const App = () => {
  // untuk menampung data resault kita membuat 1 variable
  const [popularMovies, setPopularMovies] = useState([])


  useEffect(() => {
    // ketika func getMovies berhasil, kita setPopularmovies yang isinya itu getmovies, menggunakan .then karna getMovies menggunakan asyn()
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])


  console.log({ popularlist: popularMovies });

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <div className="Movie-wrapper">
            <div className="Movie-title">{movie.title}</div>
            <img className="Movie-img"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
            <div className="Movie-date">Release : {movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3) {
      const src = await searchMovie(q)
      setPopularMovies(src.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lulu Tukang Kaset</h1>
          <input
          placeholder='Cari Film'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}
          />
        <div className="Movie-container">
          < PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
