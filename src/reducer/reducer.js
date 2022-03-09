export const initial={
   todo:[]
}
export const actions={
    ADD_TODO:"ADD_TODO",
    REMOVE_TODO:"REMOVE_TODO",
    COMPLETE_TODO:"COMPLETE_TODO"

}
export const reducer=(state,action)=>{
     switch(action.type){
         case "ADD_TODO":
          { 
              return {
               todo:[
                   ...state.todo,
                   {
                        id:Date.now(),
                        text:action.addItem,
                        completed:false
                    }
               ]
           }}
         
         case "REMOVE_TODO":{
             const del = state.todo.filter(obj => obj.id !== action.id)
             return{
                 todo: del
             }
         }

         case "COMPLETE_TODO" :{
              const update = state.todo.map(items => items.id === action.id ? {...items, completed :  !items.completed} : items)
              return{
                  todo : update
              }
         }
         
          default: 
              return state;
          
     }
}