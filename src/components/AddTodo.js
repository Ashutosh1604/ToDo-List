import React, { useState } from 'react'

export default function AddTodo(props) {

    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");


    const submit=(e)=>{

        e.preventDefault(); //page will not reload
        //if we have not entered the title or desc it will show a alert message
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank")
        }
       else
       {

           props.addTodo(title,desc);  //addTodo function will bw called and it will take our title and desc
           
        //after adding to todo list we will clear our inputs
        setTitle("");
        setDesc("");
    }
    }


    const handleOnchangeTitle=(event)=>{

        setTitle(event.target.value)

    }

    const handleOnchangeDesc=(event)=>{
 
        setDesc(event.target.value)
        
    }

  return (
    <div className='container my-3'>

     <h3 className='text-center' style={{fontFamily:"cursive"}}> Add your todo</h3>

<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text"value={title}   onChange={handleOnchangeTitle} className="form-control" placeHolder="enter your todo title here " id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc}  onChange={handleOnchangeDesc} className="form-control" placeholder='enter your todo description here' id="desc"/>
  </div>

  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}
