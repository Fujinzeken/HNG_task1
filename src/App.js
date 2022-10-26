import './App.css';
import slack from './assets/slack.svg'
import github from './assets/Icon.svg'
import i4g from './assets/I4G.svg'
import zuri from './assets/zuri.svg'
import {IoMdShareAlt} from 'react-icons/io'
import {SlOptions} from 'react-icons/sl'

function App() {

  const handleClick = ()=>{
    let url = document.location.href

    navigator.clipboard.writeText(url);
    alert("Url copied")

  }
  return (
    <div className="App">
      <main className='header'>
        <img id='profile__img' src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='profile.png'/>
        <p id='twitter'>mikolmusic</p>
        <p id='slack'>Tijani Micheal</p>
      
        <button onClick={handleClick}
         className='shareIcon'><IoMdShareAlt className='icon show'/> <SlOptions className='icon hide'/></button>
       

        <div className='linkContainer'>
          <a href='https://www.twitter.com' target='blank' ><button className='btn'>Twitter Link</button></a>
           <a href="https://training.zuri.team/" target='blank' id='btn__zuri'><button className='btn'>Zuri Team</button></a>
           <a href='http://books.zuri.team' target='blank' id='books'><button className='btn'>Zuri Books</button></a>
           <a href='https://books.zuri.team/python-for-beginners?ref_id=tijanimicheal' target='blank' ><button className='btn'>Python Books</button></a>
           <a href='https://background.zuri.team' target='blank'><button className='btn'>Background Check for Coders</button></a>
           <a href='https://books.zuri.team/design-rules' target='blank' ><button className='btn'>Design Books</button></a>
        </div>
        <div className='logoContainer'>
          <img src={slack} alt='slack.png'/>
          <img src={github} alt='github.png'/>
        </div>
       
      </main>
      <footer className='footer'>
          <img src={zuri} alt='Zuri.png'/>
          <p>HNG Internship 9 Frontend Task</p>
          <img src={i4g} alt='I4G.png'/>
        </footer>
      
    </div>
  );
}

export default App;
