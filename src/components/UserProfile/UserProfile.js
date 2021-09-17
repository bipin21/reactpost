import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const UserProfile = (props) => {

    const isAuthenticated =  useSelector(state => state.isAuthenticated);

    const fetchDataHandler = () => {
        axios.get('/posts')
        .then(
            response => {
                console.log(response.data)
            }
        )
        .catch(err => console.log(err))
    }

    return (
        <React.Fragment>
            <main>
                {isAuthenticated ? null : props.history.push("/login")}
                <h1>My User Profile</h1>
            </main>
            <button onClick={fetchDataHandler}>
                Get Posts
            </button>
        </React.Fragment>

    );


}


export default UserProfile;