import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { countState } from './recoil/atom';


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
    </div>
  );
}

export default App;
