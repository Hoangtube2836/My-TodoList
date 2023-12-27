import React ,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value,task.id);
    };
  return (
    <div>
      <form onSubmit={handleSubmit} className='TodoForm' >
        <input className='todo-input' value={value}
        type='text' 
        placeholder='Update Task' 
        onChange ={ (e)  => setValue( e.target.value)} />

        <button  type='submit' className='todo-btn'>Save task</button>
        
      </form>
    </div>
  )
}

export default EditTodoForm
