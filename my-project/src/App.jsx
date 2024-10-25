/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(54);
  return (
    <div className="flex items-center justify-center flex-col">
      <h1>React App</h1>
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>

      <div>
        <span className="countdown font-mono text-6xl">
          <span style={{ "--value": counter }}></span>
        </span>
      </div>
      <progress className="progress w-56" value="70" max="100"></progress>
    </div>
  );
};

export default App;
