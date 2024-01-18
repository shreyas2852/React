import { useEffect, useState } from "react";

let Currenttime = () =>{
  const[time,settime] = useState(new Date());
  useEffect(()=>{
    const IntervalId = setInterval(()=>{
      settime(new Date());
    },1000);
    
  },[]);

  return <p> Current Date:{time.toLocaleDateString()} And Time {time.toLocaleTimeString()}</p>
}
 export default Currenttime;