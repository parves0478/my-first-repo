import React, { useState } from 'react'
import Navbar from './com/Navbar/Navbar'
import Hero from './com/Hero/Hero'
import Programs from './com/programs/Programs'
import Title from './com/title/Title'
import About from './com/about/About'
import Campus from './com/campus/Campus'
import Testimonials from './com/testimonials/Testimonials'
import Contact from './com/Contact/Contact'
import Footer from './com/footer/Footer'
import Video from './com/video/Video'

const App = () => {
  const [playState,setPlayState]=useState(false);
  return (
    <div>

<Navbar/>
<Hero/>
<div className="container">
  <Title subTitle='Our PROGRAM' title='what We Offer'/>
<Programs/>
<About setPlayState={setPlayState}/>
<Title subTitle='Gallery' title='Campus photos'/>
<Campus/>

<Title subTitle='TESTIMONIALS' title='what student says'/>
<Testimonials/>
<Title subTitle='Contact Us' title='Get in touch'/>
<Contact/>
<Footer/>


</div>
<Video playState={playState} setPlayState={setPlayState}/>



    </div>
  )
}

export default App
