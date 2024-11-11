import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
        <div className="card" >
            <img src={service.getFilePreview(featuredImage)} alt="" />
            <p>{title}</p>
        </div>
        </Link>
    )
}

export default PostCard