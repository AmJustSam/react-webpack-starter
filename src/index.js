import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./Normalize.scss";
import "./Main.scss";

ReactDOM.render(
 <Router>
   <App/>
 </Router>, 
 document.getElementById("root"));