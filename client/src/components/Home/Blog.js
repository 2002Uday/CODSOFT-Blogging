import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <div className='post'>
        <img src='https://images.newscientist.com/wp-content/uploads/2023/10/12155944/SEI_175538505.jpg' alt='blog'/>    
        <div className='text'>
            <h1>Ukrainian AI attack drones may be killing without human oversight</h1>
            <p className='info'>
                <a href='/' className='author'>Uday Bharadwa</a>
                <time>13-10-2023 10:26</time>
            </p>
            <p className='summry'>Ukraine is using drones equipped with artificial intelligence that can identify and attack targets without any human control, in the first battlefield use of autonomous weapons or "killer robots Ukrainian attack drones equipped with artificial intelligence are now finding and attacking targets without human assistance, New Scientist has learned, in what would be the first confirmed use of autonomous weapons or “killer robots”. While the drones are designed to target vehicles such as tanks, rather than infantry, it is almost certain that the resulting explosions are killing Russian soldiers without a direct command from a human operator, although no casualties have been confirmed.
            The drone is a quadcopter called …"</p>
        </div>
    </div>
  )
}

export default Blog