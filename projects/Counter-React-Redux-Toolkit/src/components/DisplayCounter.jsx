import { useSelector } from "react-redux";

const DisplayCounter = () =>{
  const {counterval} = useSelector(store => store.counter);
  return(
    <p className="lead mb-4">
      Counter current value : {counterval}
    </p>
  );
}

export default DisplayCounter;