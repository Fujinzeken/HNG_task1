import slack from '../assets/slack.svg'
import github from '../assets/Icon.svg'
import {IoMdShareAlt} from 'react-icons/io'
import {SlOptions} from 'react-icons/sl'
import pics from '../assets/pics.jpg'
import {AiOutlineCamera} from 'react-icons/ai'
import { useState } from 'react';
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'



function Home() {
    const [show, setShow] = useState(false)
    const [showCamera, setShowCamera] = useState(false)
  
   
    const showOption = ()=>{
      setShow(!show)
    }
    const handleClick = ()=>{
      let url = document.location.href
  
      navigator.clipboard.writeText(url);
      alert("Url copied")
  
    }
  
    const handleMouseOver = ()=>{
      setShowCamera(!showCamera)
    }
    return (
      <div className="App" onClick={()=> {show && setShow(false)}}>
        <main className='header'>
          <img onMouseEnter={handleMouseOver} id='profile__img' src={pics} alt='profile.png'/>
          {showCamera &&
          <div onMouseLeave={()=>setShowCamera(false)} className='camera'><AiOutlineCamera className='camera-icon' /></div>}
          
          <p id='twitter'>windlord_fujin</p>
          <p id='slack'>windlord_fujin</p>
        
          <button onClick={showOption}
           className='shareIcon'><IoMdShareAlt className='icon show'/> <SlOptions className='icon hide'/></button>
           {show &&
           <button onClick={handleClick} className='share-option'><IoMdShareAlt className='icon option'/> Share Profile</button>
          }
  
          <div className='linkContainer'>
            <a href='https://www.twitter.com/windlord_fujin' target='blank' ><button className='btn'>Twitter Link</button></a>
             <a href="https://training.zuri.team/" target='blank' id='btn__zuri'><button className='btn'>Zuri Team</button></a>
             <a href='http://books.zuri.team' target='blank' id='books'><button className='btn'>Zuri Books</button></a>
             <a href='https://books.zuri.team/python-for-beginners?ref_id=tijanimicheal' target='blank' ><button className='btn'>Python Books</button></a>
             <a href='https://background.zuri.team' target='blank'><button className='btn'>Background Check for Coders</button></a>
             <a href='https://books.zuri.team/design-rules' target='blank' ><button className='btn'>Design Books</button></a>
             <Link to='/contact' id='contact'><button className='btn'>Contact Me</button></Link>
  
          </div>
          <div className='logoContainer'>
            <img src={slack} alt='slack.png' />
            <img src={github} alt='github.png'/>
          </div>
         
        </main>
       <Footer />
      </div>
    );
  }
  
  export default Home;