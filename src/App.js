
import './App.css'
import MovieCard from './component/MovieCard';
import React, { Suspense } from "react";

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
        영화 제목 가져오기
        <MovieCard></MovieCard>
        </Suspense>
    </div>
  );
}

export default App;
