import React, { useContext, useEffect, useMemo, useState, useCallback, useReducer } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import { APIConfig } from '../../Store/APIConfig';



const Posts = (props) => {
    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false); // indicates that is retreiving data
    const [error, setError] = useState();
    const [selectedId, setSelectedId] = useState(null);



    function fetchPostsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
        }
        setLoading(true);
        setError(null); // this is to set the error to null, if there were any previous errors existing 
        //console.log(isLoading);
        axios.get(postAPI, {headers})
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }

    useEffect(fetchPostsHandler, []); // This will be fetched when mounted

    const postSelectedHandler = (id) => {
        setSelectedId(id);
    }
    
    //=======================================================

    const rposts = posts.map(post => {
        return <Link to={props.match.url + '/' + post.id} key={post.id}>
            <Post
                title={post.title}
                author={post.author}
                clicked={() => { postSelectedHandler(post.id) }}
                id={post.id} />
        </Link>
    });

    let content = <p >No posts available</p>;
    if (rposts.length > 0) {
        content = rposts;
    }
    else if (error) {
        content = <p>{error}</p>;
    }
    else if (isLoading) {
        setTimeout(() => {
            content = <p> Loading ... </p>;  
        }, 3000); 
    }
    
    return (
        <div>
            <section className="Posts">
                {content}
            </section>
            <Route path={props.match.path + '/:id'} component={FullPost} /> 
            
        </div>

    );
}

export default Posts;
