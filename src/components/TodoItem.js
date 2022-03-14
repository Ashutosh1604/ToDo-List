import React from 'react'

export default function TodoItem(props) {


 
  return (
    <>
    <div className='row my-4'>
     <h4 className='col-md-5'>#   {props.todo.title}</h4>
     <p className='col-md-6'>{props.todo.desc}</p>
     <div className='col-md-1'>

     <button className='btn btn-sm btn-danger ' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
     </div>

    </div>
    <hr/>
    </>
  )
}
