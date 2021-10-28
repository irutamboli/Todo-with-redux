import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import Login from './components/Login'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./components/Home";
import Protectedroutes from "./components/Protectedroutes";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
function App() {
  return (
   <div className="any">
      <BrowserRouter>
<Navbar />
<Switch>
  

<Route exact path='/Home' component={Home} >
    <Home />
  </Route>
  
  <Route path='/Login'  component={Login} >
    <Login />
  </Route>
  
<Route path='/Todos' >
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
      </Route> 

      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
