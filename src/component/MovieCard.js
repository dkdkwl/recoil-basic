import React from 'react'
import { useRecoilValue } from 'recoil';
import { movieData } from '../recoil/selector';
import MovieList from './MovieList';

const MovieCard = () => {
    const movieList = useRecoilValue(movieData);
  return (
    <div className='movieListWrap'>
      <div className='movieListArea'>
        <h4>POPULAR LIST</h4>
        <MovieList movies={movieList.popularData.data}></MovieList>
      </div>
      <div className='movieListArea'>
        <h4>TOP RATED LIST</h4>
        <MovieList movies={movieList.ratedData.data}></MovieList>
      </div>
      <div className='movieListArea'>
        <h4>UPCOMING LIST</h4>
        <MovieList movies={movieList.upcomingData.data}></MovieList>
      </div>
    </div>
  )
}

export default MovieCard