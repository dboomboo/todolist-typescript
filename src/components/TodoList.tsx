import  { FC }from 'react';

import { ITask } from '../Interface';
import Todo from './Todo';
interface Props{
    todoList:ITask[];
    onCheckBtnClick(id:string):void
}

const TodoList:FC<Props>=({todoList,onCheckBtnClick})=>{
    return(
        <>
        {
            todoList.map(todo=><Todo key={todo.id} task={todo} onCheckBtnClick={onCheckBtnClick}></Todo>)
        }
        </>
    );
}

export default TodoList;