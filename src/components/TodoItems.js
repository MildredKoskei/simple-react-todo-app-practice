import React from "react";


function TodoItems({ todoObject, handleDelete}) {
  const {id,task,complete} = todoObject;
  function handleToggle(id){
console.log(id);

fetch(`http://localhost:3000/todos/${id}`,{
  method: "PATCH",
body: JSON.stringify({"complete" :complete === "complete" ? "incomplete" :"complete" })
})
.then(resp => resp.json())
.then(result => console.log(result))
  }
  return (
    <li>{task} <button className="delete btn" onClick={() => (handleDelete(id))}>Delete</button>
    <button onClick = {() => (handleToggle(id))}>Toggle</button>
    </li>
  )
}

export default TodoItems