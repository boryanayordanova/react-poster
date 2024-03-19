import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from "./Post";
import classes from "./PostsList.module.css";
export default function PostsList(){

    //infinite loop:
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
    //     setPosts(data.posts);
    // });

    const posts = useLoaderData();

    return (
        <>

        {posts.length > 0 && (
            <ul className={classes.posts}>
                {/* <Post author="Bory" body="Check out the full course!"/> */}
                {posts.map((post) => (
                    <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
                ))}
                
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h1>There are no posts yet.</h1>
                <p>Start adding some!</p>
            </div>
        )}

        </>
    )
}