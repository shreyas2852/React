import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import Items from "./components/Items"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import Welcome from "./components/Welcome"

function App() {
  const [items,setItems]=useState([]);
  const handleSave = (name,date)=>{
    const newItems =[...items,{name:name,date:date}];
    setItems(newItems);
  }
  const handleDeleteItem = (item) =>{
    const newItems = items.filter(i => i.name !== item.name);
    setItems(newItems);
  }
  return(
    <center>
        <AppName/>
        <AddTodo handleSave={handleSave}/>
        {items.length === 0 && <Welcome items={items}/>}
        <Items items={items} handleDeleteItem={handleDeleteItem}/>
    </center>
  );
  }

export default App
