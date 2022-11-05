import React from 'react'
import Footer from '../component/Footer'
import './contact.css'
const Contact = () => {
  return (
    <div className='container'>
      <div className='contact__form'>
        <h1>Contact Me</h1>
        <p>Hi there, Contact me to ask me about anything you have in mind.</p>
        <form>
            <div className='input__container'>
                <div className='input__data'>
                    <label htmlFor='first_name' >First name</label>
                    <input id='first_name' type='text' placeholder='Enter your first name'/>
                </div>
                <div className='input__data'>
                    <label htmlFor='last_name' >Last name</label>
                    <input id='last_name' type='text' placeholder='Enter your last name'/>
                </div>
            </div>
            <div className='input__data'>          
                <label htmlFor='email' >Email</label>
                <input id='email' type='email' placeholder='yourname@email.com'/>
            </div>
            <div className='input__data'>          
                <label htmlFor='message' >Message</label>
                <textarea id='message' type='text' placeholder="Send me a message and i'll reply as soon as possible"/>
            </div>
            <div className='checkbox'>          
                <input id='checkbox' type='checkbox'/>
                <label htmlFor='checkbox' className='checkbox__label'>You agree to providing your data to windlord_fujin who may contact you.</label>
            </div>
            <button id='btn__submit' className='button'>Send Message </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
