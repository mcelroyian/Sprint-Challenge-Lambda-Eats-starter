import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <p>Because something, something, Quarantine</p>
            <Link to='/pizza'>
                <button>Order Pizza</button>
            </Link>
        </div>
    
    )
}

export default Home
