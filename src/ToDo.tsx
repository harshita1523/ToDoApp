import React, { useState } from 'react';
import "./App.css";

interface item{
    id:number;
    title:string;
    isCompleted:boolean;
}

export const ToDo:React.FC = () => {
    const [todos,setTodos]=useState<item[]>([
        {id:1,title:"But groceries",isCompleted:false},
        {id:2,title:"Say hello",isCompleted:true}
    ]);
    const [input,setInput]=useState<string>("");
    const handleToggle=(id:number)=>{
        
        setTodos(
            todos.map((item)=>{
                if(item.id===id){
                    return {...item,isCompleted:!item.isCompleted};
                }
                return item;
            })
        );
           
    };
  return (
    <div className="container">
      <h1>My To Do List </h1>
      <ul>
        {todos.map((item) => {
            return <li key={item.id} onClick={()=>handleToggle(item.id)} style={{textDecoration:item.isCompleted?"line-through":"none"}}>
                {item.title}
            </li>
        })
        }
        
        
      </ul>
      <input onChange={(e)=>{
        setInput(e.target.value);
      }}type="text" placeholder="Add your task..."/>
      <button onClick={()=>{
        const newTodo:item={id:Date.now(),title:input,isCompleted:false};
        setTodos([...todos,newTodo]);
      }}>Add</button>
    </div>
  )
}

export default ToDo;
