import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo';


function App() {


   let initTodo ; //to store list items
  if( localStorage.getItem("todos")===null)   // if localStorage todos is null
  {
    initTodo=[];  //set it with empty array

  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));   //else set it with current todo items
  }


  const [todos, setTodos] = useState(initTodo);  //to store array of todos

 


  //it will set the todos with those todo only which do not match the todo whose delete button we have clicked
  const onDelete = (todo)=>{
   
    setTodos(todos.filter((e)=>{

      return e!==todo;
    }));

  }


  const addTodo = (title,desc)=>{

    let sno;  //to store sno of the todo you are adding

    if(todos.length==0)   //if todos is empty 
    {
     sno=0;   
    }
    else{

      sno=todos[todos.length-1].sno +1;  //increase the sno by adding one to the sno of last todo
    }

    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }

    setTodos([...todos,myTodo]);
        
    
    
  }


  


  


  //when todos change set localStorage todos with our todos
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))    
  
  }, [todos])
  

  return (
    <>

<Header title="ToDosList"  searchBar={false}/>
<AddTodo  addTodo={addTodo}/>
<Todos  todos={todos} onDelete={onDelete}/>
<Footer/>

    </>
  );
}

export default App;
