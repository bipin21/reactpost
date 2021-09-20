import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post";
import { APIConfig } from "../../Store/APIConfig";
import { LikedPosts } from "../../Store/LikedPosts";

const Followings = (props) => {
    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const [posts, setPosts] = useState([]);
    const { likedPosts, setLikedPosts } = useContext(LikedPosts);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    function fetchPostsHandler() {
        const headers = {
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        axios.get("/posts", { headers })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console(error.message);
            })

    }

    useEffect(fetchPostsHandler, []); 

    const rposts = posts.map(post => {
        return (likedPosts.includes(post.id)) ?
         <Link to={props.match.url + '/' + post.id} key={post.id}>
            <Post
                title={post.title}
                author={post.author}
                id={post.id} />
        </Link>
        :
        <div></div>;

    });

    return (
        <div>
            {isAuthenticated ? null : props.history.push("/login")}
            {rposts}
        </div>
    );


}

export default Followings;