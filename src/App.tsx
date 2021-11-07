import React from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList';
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState,useCallback,useEffect } from "react";
import {v4} from 'uuid';
import { ITask } from './Interface';
const TODO_APP_STORAGE_KEY = 'TODO_APP';
const App:React.FC=()=> {

  const [todoList,setTodoList] = useState<ITask[]>([]);
  const[textInput,setTextInput] = useState<string>("");

  useEffect(()=>{
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if(storagedTodoList){
      setTodoList(JSON.parse(storagedTodoList));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(TODO_APP_STORAGE_KEY,JSON.stringify(todoList));
  },[todoList])


  const onTextInputChange = useCallback((e)=>{
    setTextInput(e.target.value);
  },[]);

  const onAddBtnClick=useCallback((e)=>{
    const newTask = {name:textInput,id:v4(),isCompleted:false};
    setTodoList([newTask,...todoList]);
    setTextInput("");
  },[textInput,todoList]);

  const onCheckBtnClick=useCallback((id)=>{
    console.log('Click hoan thanh : '+id)
    setTodoList(prevState=>prevState.map(todo=>
      todo.id===id?{...todo,isCompleted:true}:todo
      )
    );
  },[]);

  return (
    <div>
      <h3>Danh sách cần làm</h3>
      <Textfield name='add-todo' placeholder ='Thêm việc cần làm...' elemAfterInput={
        <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>Thêm</Button>
      } css={{padding:"2px 4px 2px"}} value={textInput} onChange={onTextInputChange}></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}></TodoList>
    </div>
  );
}

export default App;
