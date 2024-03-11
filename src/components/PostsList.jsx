import { useState } from 'react';

import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from './Modal';
export default function PostsList({ 
    isPosting, 
    onStopPosting, 
}){

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        // setPosts([postData, ...posts]);
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
        {isPosting && (
            <Modal onClose={onStopPosting} >
                <NewPost
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal>
        )}
        <ul className={classes.posts}>
            <Post author="Bory" body="Check out the full course!"/>                
            {/* {posts} */}
        </ul>
        </>
    )
}