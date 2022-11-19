
import './App.css';
import Homepage from "./compoents/homepage/homepage";
import Login from './compoents/login/login';
import Register from './compoents/register/register';
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({

  })
  return (
    <div className="App">
    <Router>
<Routes> 
<Route exact path="/"  element={ user && user._id ? <Homepage setLoginUser={setLoginUser}/> :<Login setLoginUser={setLoginUser}/>    }>{

} </Route>
        <Route  path='/register' element={<Register/>}/>
          <Route  path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
  </Routes>
    </Router>
    </div>
  );
}

export default App;
