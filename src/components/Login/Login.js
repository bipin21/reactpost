import React, { useRef } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/index';

const Login = (props) => {
  
  const dispatch = useDispatch();
  const formData = useRef();

  const loginHandler = () => {
    const form = formData.current
    const userCredentials = { username: form['user'].value, password: form['password'].value };
        
    dispatch(authActions.login(userCredentials));
    props.history.push("/posts");
  }

  return (
    <main className="Login">
      <section>
        <form ref={formData} onSubmit={loginHandler}>
          <div className="formrow">
            <label htmlFor='user'>User</label>
            <input type='text' id='user' />
          </div>
          <div className="formrow">
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button className="formrow">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
