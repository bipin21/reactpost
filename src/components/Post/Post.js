import React, { useContext } from 'react';
import { LikedPosts } from '../../Store/LikedPosts';

import './Post.css';

const Post = (props) => {

    const { likedPosts, setLikedPosts } = useContext(LikedPosts);
    const handleUnfollow = (e) => {
        const id = e.target.id;
        setLikedPosts(likedPosts.filter(item => item != id))
        console.log(likedPosts)
    }

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
            {
                likedPosts.includes(props.id)
                    ?
                    <button id={props.id} onClick={handleUnfollow}>
                        Unfollow </button>
                    :
                    <button onClick={() => {
                        setLikedPosts([...likedPosts, props.id])
                        console.log(likedPosts);
                    }}>
                        Follow </button>}
            {/* add this to blog context */}
        </article>
    );
}

export default Post;