import React from 'react'

const List = (props) => {

 

  return (
    <>
     <div className="todo-style d-flex mt-1">
     <div className="icon me-3">
     <i className="fa-regular fa-circle-xmark" onClick= { ()=>{ props.onSelect(props.id) } } ></i>
     </div>
     
     <li>  {props.text } </li>

     </div>
        
    </>
  )
}

export default List