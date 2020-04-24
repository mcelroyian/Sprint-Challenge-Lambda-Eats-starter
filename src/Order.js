import React from 'react'

function Order({pizza}) {
    return (
        <div className='order-details'>
            <h2>Congrats, your pizza is on the way</h2>             
           <p>Name: {pizza.name}</p>
           <p>Size: {pizza.size}</p> 
           <p>Special Instructions: {pizza.instructions === '' ? "No special isntructions" : pizza.instructions}</p>
        </div>
        

    )
}
export default Order