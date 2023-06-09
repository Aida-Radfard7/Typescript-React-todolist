import React , { useState, useRef} from 'react';
import './App.scss';
import { DeleteIcon, EditIcon } from './SvgComonent/CommonSVG';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

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
    const newItem : TodoType = {title : newToDo , id : uuidv4() }
    // setItems([...items as TodoType[] , newItem as unknown as TodoType])
    setItems([...items, newItem])
    if(input.current != null) input.current.value = "";
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) : void =>{
    if(e.key === 'Enter'){
      e.preventDefault()
      addNewToDo(input.current?.value)
    }
  }

  const deleteTask = ( id : string) : void =>{
    Swal.fire({
      title: 'Are you sure you want to delete it?',
      showCancelButton: true,
      confirmButtonColor: 'rgb(14, 93, 30)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'delete'
    }).then((result) => {
      if (result.isConfirmed) {
        const extant = items.filter(item => item.id !== id)
        setItems([...extant])
      }
    })
  }

  const editTask = async ( id : string) =>{
    const { value: newTitle } = await Swal.fire({
      input: 'text',
      confirmButtonColor: 'rgb(14, 93, 30)',
      inputPlaceholder: 'Type your To Do here...',
      showCancelButton: true
    })
    if(newTitle){
      const index = items.findIndex(object => {
        return object.id === id
      })
      const newItem = {title : newTitle , id : id}
      items.splice(index , 1 , newItem)
      setItems([...items])
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
                    <button className='icon__edit' onClick={() => editTask(item.id)}><EditIcon /></button>
                    <button className='icon__delete' onClick={() => deleteTask(item.id)}><DeleteIcon /></button>
                  </span>
                </li>
            )}
          </ul>
        </section>

    </div>
  );
}

export default App;
