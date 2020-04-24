import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Form from './Form'
import "./index.css";



//Data ENDPOINT
const url = 'https://reqres.in/api/users'

// USER TEMPLATE

const pizzaDefault = {
  name: '',
  size: '',
  ham: false,
  pepperoni: false,
  mushrooms: false,
  bacon: false,
  pineapple: false,
  olives: false,
  instructions: '',
}

// ERRORS Default
const errorsDefault = {
  name: '',
}

// YUM Validation


const App = () => {

  ///State
  const [pizzaForm, setPizzaForm] = useState(pizzaDefault)
  const [isDisabled, setIsDisabled] = useState(false)
  const [errors, setErrors] = useState(errorsDefault)
  const [pizzas, setPizzas] = useState([])



  //Event Handlers

  const inputChange = e => {
    const name = e.target.name
    const value = e.target.value

    setPizzaForm({...pizzaForm, [name]:value,})
  }

  const checkChange = e => {
    const name = e.target.name
    const value = e.target.checked

    setPizzaForm({...pizzaForm, [name]:value,})
  }

  const onSubmit = e => {
    e.preventDefault()
    sendPizza(pizzaForm)
    setPizzaForm(pizzaDefault)
  }

  //Helpers
  const sendPizza = (pizzaDetails) => {
    //post axios call to server
    axios.post(url, pizzaDetails)
      .then(res => {
        debugger
        setPizzas([...pizzas, res.data])
      })
      .catch(err => {
        debugger
      })
    //save response in state
  }

  //Validate form


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
            <Form disabled={isDisabled} values={pizzaForm} inputChange={inputChange} checkChange={checkChange} onSubmit={onSubmit}  />
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
