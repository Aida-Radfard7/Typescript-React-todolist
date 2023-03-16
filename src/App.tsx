import React , { useState, useRef } from 'react';
import './App.scss';
import { DeleteIcon, EditIcon } from './SvgComonent/CommonSVG';


function App() {

  type todoType = {
    title : string,
    id : string
  }

  const [items , setItems] = useState<todoType[]>([])
  const input  = useRef<HTMLInputElement>(null);

  const addNewToDo = (newToDo : string | undefined) : void =>{
    if (newToDo == undefined) return
    const newItem = {title : newToDo , id : '1'}
    setItems([...items , newItem])
  }


  return (
    <div className="App">
      <form id="form">
        <section className='form__header'>
          <label className='input'>
            <input 
              className='input__field' 
              type="text"
              ref={input}  />
            <span className='input__label'>add your to do ...</span>
          </label>
          <button onClick={() => addNewToDo(input.current?.value)} className='btn-submit' type='button'>Add</button>
        </section>
      </form>

        <section className='list'>
          <ul className='list__items'>
            {items.map((item , index) => 
                <li key={index} className='list__item'>
                  {item.title}
                  <span className='icon'>
                    <button className='icon__edit'><EditIcon /></button>
                    <button className='icon__delete'><DeleteIcon /></button>
                  </span>
                </li>
            )}
          </ul>
        </section>

    </div>
  );
}

export default App;
