import {createContext, useReducer} from 'react';
import { reducer,initial,actions } from './reducer';



export const Context= createContext();
  
 export const TodoItem = ({children}) => {
     const[state,dispatch] = useReducer(reducer,initial)
     const values ={
        todos:state.todo,
        
        addTodo: (addItem)=>{
           dispatch ({type: actions.ADD_TODO,addItem});
        },
        removetodo: (id) => {
            dispatch ({type: actions.REMOVE_TODO,id});
        },   
     }

     return(
         <Context.Provider value={values}>
         {children}
         </Context.Provider>
     );
 };
