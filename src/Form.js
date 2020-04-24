import React from 'react'

function Form(props) {
    const {disabled, values, inputChange, checkChange, onSubmit} = props
    return (
        <div className="form-container">
            <h2>Build your Pizza</h2>
            <form>
            <label >Name: &nbsp;
            <input 
                onChange={inputChange}
                value={values.name}
                type="text" 
                name="name" />
            </label>
                <label>Pizza Size: 
                <select 

                    onChange={inputChange}
                    value={values.size}
                    name='size'>
                    <option defaultValue=''>Select a Size</option>
                    <option value='S'>Small</option>
                    <option value='M'>Medium</option>
                    <option value='L'>Large</option>
                    <option value='XL'>Extra Large</option>
                </select>
                </label>
                <h4>toppings</h4>
                <div>
                <label>Ham
                <input 
                    onChange={checkChange}
                    checked={values.ham}
                    type="checkbox" 
                    name="ham" /></label>
                    <label>Pepperoni
                <input 
                    onChange={checkChange}
                    checked={values.pepperoni}
                    type="checkbox" 
                    name="pepperoni" /></label>
                <label>Mushrooms
                <input 
                    onChange={checkChange}
                    checked={values.mushrooms}
                    type="checkbox" 
                    name="mushrooms" /></label>
                <label>Bacon
                <input 
                    onChange={checkChange}
                    checked={values.bacon}
                    type="checkbox" 
                    name="bacon" /></label>
                <label>Pineapple
                <input 
                    onChange={checkChange}
                    checked={values.pineapple}
                    type="checkbox" 
                    name="pineapple" /></label>
                <label>Olives
                <input 
                    onChange={checkChange}
                    checked={values.olives}
                    type="checkbox" 
                    name="olives" /></label></div>
                <label>Special Instructions:
                <input 
                    onChange={inputChange}
                    value={values.instructions}
                    type='text' 
                    name='instructions' /></label>
                <button onClick={onSubmit} disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default Form