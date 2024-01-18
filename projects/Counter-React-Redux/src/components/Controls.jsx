import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () =>{

  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () =>{
    dispatch({type : "INCREMENT"});
  };

  const handleDecrement = () =>{
    dispatch({type : "DECREMENT"});
  };
  
  const handleAdd = () =>{
    dispatch({
      type : "ADD" ,
      payload :{
      num: inputElement.current.value,
      },
    });
    inputElement.current.value="";
  };

  const handleSubstract = () =>{
    dispatch({
      type : "SUBSTRACT" ,
       payload :{
      num: inputElement.current.value,
      },
    });
    inputElement.current.value="";
  };

  const handlePrivacyToggle = () =>{
    dispatch({
      type:"PRIVACYTOGGLE",
    })
  }
  return(
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>
                +1
              </button>
              <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>
                -1
              </button>
              <button type="button" className="btn btn-warning btn-lg px-4" onClick={handlePrivacyToggle}>
                Privacy Toggle
              </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input type="text" placeholder="Enter Number" ref={inputElement}  className="number-input"/>
                <button type="button" className="btn btn-info btn-lg px-4 gap-3"  onClick={handleAdd}>
                  Add
                </button>
                <button type="button" className="btn btn-danger btn-lg px-4 gap-3" 
                onClick={handleSubstract}>
                  Substract
                </button>
      </div>
    </div>
  );
}

export default Controls;