import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to TO-DO App</h1>
            
        <p class="lead">
          <button className="btn btn-outline-dark me-3">
            {' '}
            <Link style={{ color: 'black' }} to="/Login">
              Login Here
            </Link>
          </button>
        
        </p>
        </div>
    )
}

export default Home
