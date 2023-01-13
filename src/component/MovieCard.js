import React from 'react'
import { useRecoilValue } from 'recoil';
import { movieData } from '../recoil/selector';
import MovieList from './MovieList';

const MovieCard = () => {
    const movieList = useRecoilValue(movieData);
  return (
    <div>
      <MovieList movies={movieList.popularData.data}></MovieList>
      <MovieList movies={movieList.ratedData.data}></MovieList>
      <MovieList movies={movieList.upcomingData.data}></MovieList>
    </div>
  )
}

export default MovieCard