import React from 'react'
import List from "./component/List";
import Form from "./component/Form";
import { api } from "./api/api";
import { useEffect, useState } from "react";
import uuid from "react-uuid";


function App() {

  const[tasks,setTasks] = useState([])

  const fetchTaks = async () => {
    const res = await api.get('/todolist')
    
    setTasks(res.data)
  }

  useEffect (() => {
    fetchTaks()
  },[])

  const addNewTask = async (task) => {

    const newTask = {
      id : uuid,
      task : "New Task",
      complete : false
    }
    console.log(newTask)
  }

  return (
    <>
        <div className='w-full h-screen bg-blue-950 flex flex-col gap-y-12 justify-center items-center'>
          <h1 className="text-white text-4xl text-center font-bold">TO DO LIST</h1>
          <Form addNewTask = {addNewTask}/>
          <List tasks = {tasks}/>
        </div>
    </>
  );
}

export default App;
