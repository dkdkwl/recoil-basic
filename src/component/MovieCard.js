import React from 'react'
import { useRecoilValue } from 'recoil';
import { getApi } from '../recoil/selector';


const MovieCard = () => {
    const testApi = useRecoilValue(getApi);
  return (
    <div>
        {
          testApi.map((item,i)=>{
            return(
              <div key={i}>{item.original_title}</div>
            )
            
          })
        }
    </div>
  )
}

export default MovieCard