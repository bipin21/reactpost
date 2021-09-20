import React, { useState } from 'react';
import './Blog.css';
import { APIConfig } from '../../Store/APIConfig';
import { Redirect, Route, Switch } from 'react-router';
import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../Header/Header';
import { LikedPosts } from '../../Store/LikedPosts';
import Login from '../../components/Login/Login';
import { useSelector } from 'react-redux';
import UserProfile from '../../components/UserProfile/UserProfile';
import Followings from '../Posts/Followings';

const Blog = (props) => {
    const base = 'http://localhost:8080';
    

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
                        <Route exact path="/new-post" component={NewPost} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/login" component={Login} />
                        {/* <Route exact path='/user' component={UserProfile} /> */}
                        <Route path="/followings" component={Followings} />
                        <Redirect exact from="/" to="/posts" />
                    </Switch>
                </div>
            </APIConfig.Provider>
        </LikedPosts.Provider>
    );
}


export default Blog;