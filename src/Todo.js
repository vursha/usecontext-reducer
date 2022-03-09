import React, { useContext, useState } from "react";
import { Context } from "./reducer/context";


export  const Todo=()=>{
    const[initial,setInitial] = useState('')
    const {todos, addTodo, removetodo} = useContext(Context)
    console.log(todos)
    
    const handleClick = () =>{
        addTodo(initial)
        setInitial("")
    }

    const RemoveItem = (id) =>{
        removetodo(id)
    }

    
    return(
        <div>
            <input 
                type='text' 
                placeholder="type something"
                value={initial}
                onChange={(e) => {setInitial(e.target.value)}}
            />

            

            <button onClick = {() => handleClick()} type='submit' >submit</button>
            <hr/>
                {todos.map((item) => (
                      <>
                        <ul>
                          <li>{item.text} <button onClick={()=> RemoveItem(item.id)}>X</button></li>
                        </ul>
                      </>
                ))
                }

           

           
        </div>
    )
}