import { useState } from "react"
import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer"
import Display from "./components/Display"
function App() {
  const[showDisplay,setShowDisplay]=useState("0");
  const onButtonClick =(buttonsName) =>{
    if(buttonsName === 'C'){
      setShowDisplay("0");
    }
    else if(buttonsName === '='){
      const result = eval(showDisplay);
      setShowDisplay(result);
    }
    else{
      if(showDisplay === '0'){
        setShowDisplay(buttonsName);
      }
      else{
      const newDisplayValue = showDisplay + buttonsName;
      setShowDisplay(newDisplayValue);
      }
    }
  }
  return (
    <div className={styles.calculator}>
        <Display showDisplay={showDisplay}/>
        <ButtonsContainer 
        onButtonClick={onButtonClick}
        />
    </div>
  )
}

export default App
