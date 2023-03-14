import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <form id="form">
        <section className='form__header'>
          <label className='input'>
            <input className='input__field' type="text" placeholder=" " />
            <span className='input__label'>add your to do ...</span>
          </label>
          <button className='btn-submit'>Add</button>
        </section>
    </form>
    </div>
  );
}

export default App;
