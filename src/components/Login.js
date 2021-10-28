import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getLoginData, getLoginRoute } from '../redux/reducer';
import { useHistory } from 'react-router-dom';
function Login() {
  const history = useHistory();
  // const dispatch = useDispatch();

  const [state, setState] = useState({
    Uname: '',
    pass: '',
  });
  const [errorMessage, setErrorMessage] = useState(); // Showing Error Message

  const [login, setLogin] = useState(true);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function loginFunction() {
    if (state.Uname === '' || state.pass === '') {
      setErrorMessage('* Please Fill username/password field');
    } else {
      setErrorMessage('');
      debugger
      localStorage.setItem('token', 'LoggedIn');
      history.push('/Todos');
      
      ;
      
    }
  }

  return (
    <div>
      <div className="container bg-light mt-5 py-5 login-container">
        <h1 className="text-center">Welcome !</h1>
        <p className="text-center">Please Login to your account.</p>
        <p className="text-center" style={{ color: 'red' }}>
          {errorMessage}
        </p>
        <div class="form-group col-md-6 offset-md-3">
          <p>
            <label for="exampleInputEmail1">User Name</label>
          </p>
          <input
            name="Uname"
            onChange={handleChange}
            type="text"
            class="form-control"
            placeholder="Enter Username"
          />
        </div>

        <div class="form-group mt-3 col-md-6 offset-md-3">
          <p>
            <label for="exampleInputPassword1">Password</label>
          </p>
          <input
            name="pass"
            onChange={handleChange}
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>

        <button
          onClick={loginFunction}
          type="button"
          class=" col-md-6 offset-md-3 btn btn-primary mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
