import React, { useEffect, useState } from 'react'
import Blog from "./Blog.js"
import "./Home.css"

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  },[])
  return (
    <div className='home'>
        {posts.length > 0 && posts.map(post => (
          <Blog {...post}/>
        ))}
    </div>
  )
}

export default Home