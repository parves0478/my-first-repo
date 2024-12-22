import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>

<div className="about-left">
<img src={about_img} className='about-img' alt=''/>
<img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}} alt=''/>
</div>
<div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Lorem ipsum dolor sit.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci incidunt sint aut, quasi perspiciatis id minus voluptate, error quas fugit cum repellendus accusamus eligendi non, totam eius maxime iusto amet dignissimos!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo accusantium, minima excepturi aspernatur possimus autem temporibus eius dignissimos iusto amet nisi deleniti magnam ut!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, temporibus suscipit! Pariatur neque deserunt eveniet quibusdam officia aliquam magnam voluptatibus quas error reprehenderit! Repellendus nam quaerat quod iste deleniti hic officiis quo.</p>
    
</div>


    </div>
  )
}

export default About