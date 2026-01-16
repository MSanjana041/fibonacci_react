import React, { useState } from 'react';

function App() {
  const [n , setN] = useState(0);
  const [fibseries,setSeries] = useState([]);

  const fibonnaci = () => {
    let a = 0;
    let b = 1;
    let fib= [];

    for(let i=0; i<n ; i++){
      fib.push(a);
      let next = a + b;
      a = b;
      b = next;
    }

    setSeries(fib);
  };

  return(
    <div>
      <h2>Fibonacci Series</h2>
      <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} placeholder="Enter a number"></input>
      <button onClick={fibonnaci}>Generate Series</button>
      <p>{fibseries.join(", ")}</p>
    </div>
  );

}
export default App
