import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { APIConfig } from '../../Store/APIConfig';

import './NewPost.css';

const NewPost = (props) => {
    const APIS = useContext(APIConfig);
    const postAPI = APIS.postAPI;
    const newPostForm = useRef();
    const headers = {
        'Authorization': `Bearer ${Cookies.get('user')}`
    }
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const addNewPost = () => {
        const form = newPostForm.current
        const data = { title: form['title'].value, content: form['content'].value, author: form['author'].value }
        console.log("Success", data);
        axios.post("/posts", data, {headers}    )
            .then(data => {
                console.log("Success", data);
                props.history.push('/posts');
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <div className="NewPost">
             {isAuthenticated ? null : props.history.push("/login")}
            <form ref={newPostForm} >
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" label={'title'} name={'title'} />
                <label>Content</label>
                <textarea rows="4" label={'content'} name={'content'} />
                <label>Author</label>
                <select label={'author'} name={'author'}>
                    <option value="Dean">Dean</option>
                    <option value="Zaineh">Zaineh</option>
                    <option value="Yasmeen">Yasmeen</option>
                </select>

            </form>
            <button onClick={addNewPost} >Add Post</button>
        </div>
    );
}

export default NewPost;