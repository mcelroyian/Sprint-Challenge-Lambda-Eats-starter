import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import "./index.css";
const App = () => {
  return (
    <>
      <header>
      <Link to='/'>
       <h1>Lambda Eats</h1>
      </Link>
      
      </header>
      <div className='container'>
        <Switch>
          <Route path="/pizza" >
            <Form />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        
        
      </div>
      
    </>
  );
};
export default App;
