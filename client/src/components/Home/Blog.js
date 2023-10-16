import React from 'react';
import { Link } from "react-router-dom";
import "./Blog.css";
import {format} from 'date-fns';

const Blog = ({_id,title,summary,cover,content,author,createdAt}) => {
  return (
    <div className='post'>
      <Link to={`/blog/${_id}`} >
        <img src={'http://127.0.0.1:4000/'+cover} alt='blog'/>
      </Link>
          
      <div className='text'>
        <Link to={`/blog/${_id}`} >
          <h1>{title}</h1>
        </Link>
        <p className='info'>
          <Link to={`/profile/${author._id}`}>@{author.username}</Link>
          <time>{format(new Date(createdAt), 'MMM d, yyyy')}</time>
        </p>
        <p className='summry'>{summary}</p>
      </div>
    </div>
  )
}

export default Blog