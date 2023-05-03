import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import List from './List';

function App() {
  const[inputlist, setinputlist]= useState();
  const[list, setlist]=useState([])
  

  const itemevent = (event) =>{
        setinputlist(event.target.value)
  }

  const additems = () =>{
    setlist((olditems)=>{
      return [...olditems, inputlist]; 
    })
   setinputlist("");
  }


  const itemdel = (id) =>{
    console.log("deleted")
    setlist((olditems)=>{
      return olditems.filter((arrEle ,index)=>{
        return index !== id;
      })
    })
}


  return (
  <>
  <div className="main">
    <div className="todo">
      <h1 className='text-center mt-5'>todos</h1>
      
   <div className="row flex justify-content-center mt-4">
    <div className="col-7"> <input type="text" placeholder='enter the items' value={inputlist}  onChange={itemevent} /> </div>
    <div className="col-3"> <button className='btn btn-primary' onClick={additems} >+</button> </div>
   </div>

   <ul>
  

    {list.map((itemvalues, index)=>{
     return <List 
     key={index} 
     id={index} 
     text = {itemvalues}  
      onSelect = {itemdel}
     />
     
    })}
   </ul>
    </div>
  </div>
  </>
   
  );
}

export default App;
