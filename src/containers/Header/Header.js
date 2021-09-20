import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../Store";
import './Header.css'
import { Link, Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from "axios";

const Header = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
        <Redirect to='/login' />;
    }



    return (
        <div className="header">
            <h1>Post Management </h1><br />
            <div className="menus">
                {isAuthenticated && (
                    <nav>
                        <ul>
                            <li>
                                <Link to="/new-post">Add post</Link>
                            </li>
                            <li>
                                <Link to="/posts">Posts</Link>
                            </li>
                            {/* <li>
                                <Link to="/user">User Profile</Link>
                            </li> */}
                            <li>
                                <Link to="/followings">Following</Link>
                            </li>
                            <li>
                                Welcome {Cookies.get('username')}
                            </li>

                            <li>

                                {isAuthenticated ? <button onClick={logoutHandler}>Logout</button> : <Link to="/login">Sign In</Link>}
                            </li>
                        </ul>
                    </nav>
                )}
            </div>


        </div>
    );
}

export default Header;