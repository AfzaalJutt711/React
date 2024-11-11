import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { set } from 'react-hook-form'

function Post() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post) setPost(post)
            })
        }
    }, [])
    return post ? (
        <div className="post">
            <img src={service.getFilePreview(post.featuredImage)} alt="" />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    ) : null
}

export default Post
