
import './App.css'
import './App.scss'
import MovieCard from './component/MovieCard';
import React, { Suspense } from "react";

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <MovieCard></MovieCard>
        </Suspense>
    </div>
  );
}

export default App;
