import React, { useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Store/index";
import './Login.css';

const Login = () => {

    const loginForm = useRef();
    const dispatch = useDispatch();

    const loginHandler = () => {
        console.log('here')
        const form = loginForm.current;
        const data = {username:form['username'].value, password:form['username'].value}
        dispatch(authActions.login(data));
    }
   
    return (
        <div className="Login">
            <section>
                <form onSubmit={loginHandler} ref={loginForm}>
                    <div className="formrow">
                        <label>Username</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="formrow">
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button>
                        Login
                    </button>
                </form>
            </section>
        </div>
    );

}

export default Login;