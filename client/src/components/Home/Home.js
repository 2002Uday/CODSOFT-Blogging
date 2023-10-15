import React from 'react'
import Blog from "./Blog.js"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
    </div>
  )
}

export default Home