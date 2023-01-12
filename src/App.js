import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { countState } from './recoil/atom';
import MovieCard from './component/MovieCard';
import React, { Suspense } from "react";


function App() {
  const countNum = useRecoilValue(countState);
  const [count,setCount] = useRecoilState(countState);
  const countPlus = ()=>{
    setCount(count+1)
  }
  const countMinus = ()=>{
    setCount(count-1)
  }

  return (
    <div className="App">
        <div>test</div>
        <button onClick={countPlus}>추가버튼</button>
        <button onClick={countMinus}>감소버튼</button>

        {countNum}
        <Suspense fallback={<div>Loading...</div>}>
        영화 제목 가져오기
        <MovieCard></MovieCard>
        </Suspense>
    </div>
  );
}

export default App;
