import axios from 'axios';
import React, {  useContext, useState } from 'react';
import { APIConfig } from '../APIConfig';


import './FullPost.css';

const FullPost = (props) => {
    const APIS = useContext(APIConfig);
    const postApi = APIS.postApi;
    const deletePost = (id) => {
        console.log(id)
        axios.delete(`${postApi}${id}`)
            .then(response => {
                console.log("Success")
                props.execute()
            }
            )
            .catch(err => console.log(err))
    }

    let post = <p>Please select a Post!</p>;
    if (props.id != null) {
        post = (
            <div className="FullPost">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => { deletePost(props.id) }}>Delete</button>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;