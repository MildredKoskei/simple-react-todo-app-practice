import {React, useRef} from 'react'


function Form(setDisplayTodos) {
    const newTask = useRef(null);

    function handleTask(e){
    e.preventDefault();
    fetch(" http://localhost:3000/todos",
    {
    method: "POST",
    headers:{ "Content-Type" : "application/json"} ,
    body: JSON.stringify({"task": `${newTask.current.value}`, "complete": "incomplete"})
    })
    .then(resp => resp.json())
    .then (result => setDisplayTodos(prevValue => [...prevValue, result]))
    // setDisplayTodos(prevValue => [...prevValue,{"task": `${newTask.current.value}`, "complete": `${false}`}])
    
}
  return (
    
    <form>
        <label>
           Task: <input type = "text" ref= {newTask} placeholder="Type task ..."/>
        </label>
        <button type = "submit" onClick = {handleTask}>Add a Task</button>
    </form>
  )
}

export default Form