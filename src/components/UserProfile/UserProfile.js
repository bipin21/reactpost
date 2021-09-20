import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserProfile = (props) => {

    const isAuthenticated =  useSelector(state => state.isAuthenticated);
    const headers = {
        'Authorization': `Bearer ${Cookies.get('user')}`
    }

    const fetchDataHandler = () => {
        // axios.get('/posts', {headers})
        // .then(
        //     response => {
        //         console.log(response.data)
        //     }
        // )
        // .catch(err => console.log(err))
        
    }


    return (
        <React.Fragment>
            <main>
                {isAuthenticated ? null : props.history.push("/login")}
                <h1>My User Profile </h1>
            </main>
            <button onClick={fetchDataHandler}>
                Get Posts
            </button>
        </React.Fragment>

    );


}


export default UserProfile;