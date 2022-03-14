import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

    let myStyle={
    
        minHeight:"70vh",
        margin:"40px auto",
        border:"2px solid black",
      
    }


  return (
      <>

<h2 className=' my-5 text-center' style={{fontFamily:"cursive"}} >Todos List</h2>
    <div className='container ' style={myStyle}>
      
            
            {
                
                props.todos.length===0 ? "Todos list is Empty!!!" : 
                props.todos.map((todo)=>{
                    
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>  
        
                    
                })
                
            }


        </div>
            </>
  )
}
