import {React, useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoItems from './components/TodoItems';
import Form from './components/Form';
import Nav from './components/Nav';
function App() {
  const [displayTodos, setDislayTodos]= useState([])
useEffect(() => {
  fetch(" http://localhost:3000/todos")
  .then(resp => resp.json())
  .then(result => setDislayTodos(result))
}, []);
function handleDelete(id){

setDislayTodos(prevValue => prevValue.filter(object => object.id !== id))
fetch(`http://localhost:3000/todos/${id}`,{method: "DELETE"});
}

  return (
    
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element = {<h1>Todo App</h1>}/>
        <Route path = "/todos" element = {
        <>
        <Form setDislayTodos ={setDislayTodos}/>
      <ul className='ul'>{displayTodos.map((todoObject =>
      <TodoItems 
      todoObject = {todoObject} 
      key = {todoObject.id}
      handleDelete = {handleDelete} />
     
       ))}</ul>
       
      </> } />
      </ Routes>
      
    </div>
    
  );
}

export default App;
