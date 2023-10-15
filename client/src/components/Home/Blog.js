import React from 'react';
import "./Blog.css";
import {format} from 'date-fns';

const Blog = ({title,summary,cover,content,author,createdAt}) => {
  return (
    <div className='post'>
        <img src={'http://127.0.0.1:4000/'+cover} alt='blog'/>    
        <div className='text'>
            <h1>{title}</h1>
            <p className='info'>
                <a href='/' className='author'>{author.username}</a>
                <time>{format(new Date(createdAt), 'MMM d, yyyy')}</time>
            </p>
            <p className='summry'>{summary}</p>
        </div>
    </div>
  )
}

export default Blog