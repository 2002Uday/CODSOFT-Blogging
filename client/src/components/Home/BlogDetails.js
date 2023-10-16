import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {formatISO9075} from "date-fns";
import "./BlogDetails.css"

const BlogDetails = () => {
    const [postInfo,setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
            })
        })
    },[]);

    if (!postInfo) return '';

  return (
    <div className="post-page">
        <h1>{postInfo.title}</h1>
        <div className="date-time">
            by @<Link to={`/profile/${postInfo.author._id}`}>{postInfo.author.username}</Link> <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        </div>
        <div className="image">
            <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
  </div>
);

}

export default BlogDetails