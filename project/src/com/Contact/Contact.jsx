import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import location_icon from '../../assets/location-icon.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abf5a3e0-c144-483f-b11e-ff9a2a61feaa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a mesage <img src={msg_icon} alt=''/></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam praesentium maiores consectetur beatae magnam dicta voluptates. Dolorum, quibusdam nisi. Dicta iste rerum nihil facilis vitae.</p>
        <ul>
          <li><img src={mail_icon} alt=''/> Contact@GreateStack.cdev     </li>
          <li><img src={phone_icon} alt=''/>  +1 123-456-7890     </li>
          <li> <img src={location_icon} alt=''/>  77 Massachusetts Ave,m Cambridge <br/>Ma 02138, United States  </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label>phone number</label>
          <input type='number' name='phone' placeholder='enter your mobile' required/>
          <label>Write your message here</label>
          <textarea name='message' rows='6' placeholder='enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit<img src={white_arrow} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>









    </div>
  )
}

export default Contact