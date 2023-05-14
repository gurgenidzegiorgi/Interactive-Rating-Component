import './reset.css'
import './App.css';
import RateDiv from './components/RateDiv'
import ResultDiv from './components/ResultDiv'
import { useState } from 'react';


function App() {
  const [rate, setRate] = useState();
  const [submit, setSubmit] = useState(false)
  return (
    <div className="App">
      {submit ? <ResultDiv rate={rate} /> : <RateDiv rate={rate} submit={submit} setSubmit={setSubmit} setRate={setRate} />}
    </div>
  );
}

export default App;
