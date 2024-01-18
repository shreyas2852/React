import Clockheading from "./components/Clockheading";
import Clockslogan from "./components/Clockslogan";
import Currenttime from "./components/Currenttime";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
  return <center>
  <Clockheading/>
  <Clockslogan/>
  <Currenttime/>
  </center>
}

export default App;