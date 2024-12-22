import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero '>
<div className="hero-text">
  <h1>we ensur Lorem ipsum dolor sit amet.</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores, corrupti beatae repellendus, fugiat doloribus adipisci deleniti minus, hic ipsam exercitationem facilis itaque.</p>
  <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
</div>
    </div>
  )
}

export default Hero