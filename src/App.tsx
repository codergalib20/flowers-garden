import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import './styles/Global.css';
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
         </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
