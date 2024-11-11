import React, { useEffect, useState } from 'react'
import { PostCard } from '../components';
import { useSelector } from 'react-redux';
import service from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status);
    useEffect(()=>{
        service.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
 
    return (
        <div className="allPosts">
            {posts.map((item) => (
                <div key={item.title}><PostCard {...item} /></div>
            ))}
        </div>
    )
}

export default AllPosts
