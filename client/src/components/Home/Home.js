import React from 'react'
import Post from "./Post.js"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Home