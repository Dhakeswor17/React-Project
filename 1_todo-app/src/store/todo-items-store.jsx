   
import { createContext } from "react"

export const TodoItemContext = createContext(
    {
        todoItem:[],
        addNewItem:()=>{},
        deleteItem:() => {},
    }
   

); 