import React from 'react'
const MovieList = ({movies}) => {
  return (
    <div>{
        movies.results.map((item,i)=>{
            return(
                <div key={i}>{item.backdrop_path}</div>
            )
        })
        }</div>
  )
}

export default MovieList