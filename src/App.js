import { useState } from 'react';
import Progress from './Progress';
import './index.css';

function App() {
  const [width, setWidth] = useState(10);

  const percentageHandler = e => {
    setWidth(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Progress bar</h1>
      <Progress width={width} />
      <form>
        <label htmlFor="html">Input Percentage:</label>
        <input
          type="number"
          onChange={percentageHandler}
          placeholder={'Enter Number'}
        />
      </form>
    </div>
  );
}

export default App;
