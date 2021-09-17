import React, { useState } from 'react';
import './Blog.css';
import { APIConfig } from '../../Store/APIConfig';
import { Redirect, Route, Switch } from 'react-router';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../Header/Header';
import { LikedPosts } from '../../Store/LikedPosts';
import Login from '../../components/Login/Login';

const Blog = (props) => {
    const base = 'http://localhost:808o';
    const [likedPosts, setLikedPosts] = useState([]);
    // 
    return (
        <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
            <APIConfig.Provider
                value={
                    {
                        postAPI: base + '/posts/'
                    }
                }>
                <div className="Blog">
                    <Header />
                    <Switch>
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/login" component={Login} />
                        <Redirect from="/" to="/posts" />
                    </Switch>
                </div>
            </APIConfig.Provider>
        </LikedPosts.Provider>
    );
}


export default Blog;