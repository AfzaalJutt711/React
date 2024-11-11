import React, { useEffect, useState } from 'react'
import { PostCard } from '../components';
import { useSelector } from 'react-redux';
import service from '../appwrite/config';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status);
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (authStatus) {
        return <div className="home">
            {posts.map((item) => (
                <div key={item.title}><PostCard {...item} /></div>
            ))}
        </div>
    } else {
        return <h2>Login to see posts</h2>
    }
}

export default Home
