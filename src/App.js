import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
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

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .required('Username is required')
})


const App = () => {

  ///State
  const [pizzaForm, setPizzaForm] = useState(pizzaDefault)
  const [isDisabled, setIsDisabled] = useState(true)
  const [errors, setErrors] = useState(errorsDefault)
  const [pizzas, setPizzas] = useState([])



  //Event Handlers

  const inputChange = e => {
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setErrors({...errors, [name]: '',})
      })
      .catch(err => {
        setErrors({...errors, [name]:err.errors[0]})
      })

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


  //Disable/undisable the form
  useEffect(() => {
      schema.isValid(pizzaForm)
        .then(valid => {
          setIsDisabled(!valid)
        })
  }, [pizzaForm])

  //Helpers
  const sendPizza = (pizzaDetails) => {
    //post axios call to server
    axios.post(url, pizzaDetails)
      .then(res => {
        setPizzas([...pizzas, res.data])
        console.log(res.data)
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
            <Form errors={errors} disabled={isDisabled} values={pizzaForm} inputChange={inputChange} checkChange={checkChange} onSubmit={onSubmit}  />
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
