import React ,{ useState }from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' value={value}
        type='text' 
        placeholder='What is task today ?' 
        onChange ={ (e)  => setValue( e.target.value)} />

        <button  type='submit' className='todo-btn'>Add task</button>
        
      </form>
    </div>
  )
}

export default TodoForm
