import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
function AddTodo({handleSave}){
  const[name,setName]=useState("");
  const[date,setDate]=useState("");
  const handleName = (e) =>{
    setName(e.target.value);
  }
  const handleDate =(e) =>{
    setDate(e.target.value);
  }

  const handleClick =() =>{
    handleSave(name,date);
    setName("");
    setDate("");
  }
  return (
    < div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" value={name}onChange={handleName}/>
        </div>
        <div class="col-4">
          <input type="date" value={date} onChange={handleDate}/>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success" onClick={handleClick}><IoIosAddCircleOutline /></button>
        </div>
  </div>
  );
}

export default AddTodo;