import React, { useEffect, useState } from 'react'
import './Profile.css'
import Blog from './Blog';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const [user , setUser] = useState('');
    const [posts, setPosts] = useState([]);
    const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/user/${id}`).then(response => {
        response.json().then(userInfo =>{
            setUser(userInfo);
        })
    });
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);
  return (
    <div className='profile-page'>
        <h1 className='username'>{user.username}</h1>
        <p>Blogs Posted By {user.username}</p>
        {posts.length > 0 && posts.map(
        (post)  => (
            post.author._id === user._id ? (<Blog {...post}/>) : ("")
        )
        )}
    </div>
  )
}

export default Profile