import React, {usestate} from 'react'
import Login from './Login'
import {Link,useHistory} from 'react-router-dom'



export default function Navbar() {

  const history = useHistory();
  
function logout() {
  localStorage.removeItem('token');
  history.push('/Login');
}

    return (
        <div>
            <nav>
    <div className="nav-wrapper">
      <Link href="/" className="brand-logo"><i class="material-icons center">Todos</i></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/Home">Home</Link></li>  
        <li><Link to="/Login" >Login</Link></li>
        {/* <li><Link to="/Todos">TO DO</Link></li> */}









        
        
        <button class="btn waves-effect waves-light" type="btn" name="action" onClick={logout}>LOGOUT
    <i class="material-icons center">Logo</i>
  </button>
      </ul>
    </div>
  </nav>
        </div>
    )
}
