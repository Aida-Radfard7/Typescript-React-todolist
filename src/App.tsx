import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <form id="form">
        <label className='input'>
          <input className='input__field' type="text" placeholder=" " />
          <span className='input__label'>add your to do ...</span>
        </label>
        <button className='btn-submit'>Submit</button>
    </form>
    </div>
  );
}

export default App;
