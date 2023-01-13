import React from 'react'
const MovieList = ({movies}) => {
  return (
    <div className='movieList'>{
        movies.results.map((item,i)=>{
            if(i > 3){
                return false
            }else{
                return(
                    <div className='movieList--item' key={i}>
                        <div className="movieItem--imgBox">
                            <img className='movieItem__img' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} alt="" />
                        </div>
                        <div className="movieItem--textBox">
                            <div className='movieItem__title'>{item.title}</div>
                            <div className='movieItem--etc'>
                                <span className='movieItem__language'>언어 : {item.original_language}</span>
                                <span className='movieItem__popularity'>인기 : {item.popularity}</span>
                                <span className='movieItem__average'>평균 : {item.vote_average}</span>
                            </div>
                            <div className='movieItem__content'>{item.overview}</div>
                        </div>
                    </div>
                )
            }
        })
        }
    </div>
  )
}

export default MovieList