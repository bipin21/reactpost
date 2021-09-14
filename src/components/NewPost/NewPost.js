import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

import './NewPost.css';

// class NewPost extends Component {

const NewPost = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])
    const [post, setPost] = useState({
        title: '',
        content: '',
        author: ''
    });


    const addNewPost = () => {
        axios.post(`http://localhost:8088/posts`, post)
            .then(data => {
                console.log("Success", data);
                props.execute();
            }
            )
            .catch(err => console.log(err))
    }
    // render() {
    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
            <label>Content</label>
            <textarea rows="4" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value })} />
            <label>Author</label>
            <select value={post.author} onChange={(event) => setPost({ ...post, author: event.target.value })}>
                <option value="Dean">Dean</option>
                <option value="Zaineh">Zaineh</option>
                <option value="Yasmeen">Yasmeen</option>
            </select>
            <button onClick={addNewPost} >Add Post</button>
        </div>
    );
    // }
}

export default NewPost;