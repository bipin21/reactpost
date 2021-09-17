import axios from 'axios';
import React, {  useContext, useEffect, useState } from 'react';
import { APIConfig } from '../../Store/APIConfig';


import './FullPost.css';

const FullPost = (props) => {
    const APIS = useContext(APIConfig);
    const postAPI = APIS.postAPI;
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const [postCall, setPostCall] = useState({});
    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
        setRenderedId(props.match.params.id);
    }, []);

    useEffect(() => {
        if (renderedId !== props.match.params.id) {
            axios(postAPI + props.match.params.id, { headers })
                .then(response => {
                    setPostCall(response.data);
                    setRenderedId(props.match.params.id);
                    console.log('This wont get called again ');
                })
        }

    }, [props]);

    const deletePost = (id) => {
        console.log(id)
        axios.delete(`${postAPI}${id}`)
            .then(response => {
                props.history.push('/');
            }
            )
            .catch(err => console.log(err))
    }

    let post = <p>Please select a Post!</p>;
    if (props.match.params.id != null) {
        post = (
            <div className="FullPost">
                <h1>{postCall.title}</h1>
                <p>{postCall.content}</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => { deletePost(postCall.id) }}>Delete</button>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;