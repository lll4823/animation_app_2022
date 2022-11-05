import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component 
{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
       }
      }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    this.setState({movies,isLoading: false});
  }
  componentDidMount()
  {
    /*setTimeout(() => {
      this.setState({ isLoading: false});
    }, 3000); */
    this.getMovies();
  }

  render()
  {
    const { isLoading , movies } = this.state;
    return(
       <section className ="container">
        {isLoading ? (
          <div className="loader">
            <spen className="loader_text">Loading...</spen>
          </div>
        )
        : (
          <div className="movies">
          {movies.map((movie)=> (
            <Movie 
            key = {movie.id}
            id = {movie.id}
            title={movie.title}
            year={movie.year}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}/>
          ))}
        </div>
      )}
      </section>
    );
  }
}
export default App;