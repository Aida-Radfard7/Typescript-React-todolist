import React , { useState, useRef } from 'react';
import './App.scss';
import { DeleteIcon, EditIcon } from './SvgComonent/CommonSVG';

interface KeyboardEvent<T>{
  key: string;
  preventDefault() : void;
}

type TodoType = {
  title : string | undefined;
  id : string
}

function App() {

  const [items , setItems] = useState<TodoType[]>([])
  const input = useRef<HTMLInputElement>(null);

  const addNewToDo = (newToDo : string | undefined) : void =>{
    if (input.current?.value === '' || input.current?.value === null) return
    const newItem : TodoType = {title : newToDo , id : '1'}
    setItems([...items as TodoType[] , newItem as unknown as TodoType])
    if(input.current != null) input.current.value = "";
     
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) : void =>{
    if(e.key === 'Enter'){
      e.preventDefault()
      addNewToDo(input.current?.value)
    }
  }

  return (
    <div className="App">
      <form id="form">
        <section className='form__header'>
          <label className='input'>
            <input 
              className='input__field'
              onKeyPress={handleKeyPress} 
              type="text"
              ref={input}  />
            <span className='input__label'>add your Task ...</span>
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
