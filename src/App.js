import './App.css';
import chatgptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className='upperSide'>
            <div className="upperSideTop"><img src={chatgptLogo} alt="Logo" className="Logo"/><span className="brand">ChatGPT</span>
                 <button className='midBtn'><img src={addBtn} alt="new chat" className="addBtn"/>New Chat</button>
                 
               <div className='upperSideBottom'>
                 <button className='query'><img src={msgIcon} alt="Query" className="msgIcon"/>What is programming?</button>
                 <button className='query'><img src={msgIcon} alt="Query" className="msgIcon"/>How to use an API?</button>
                 </div>
              </div>
         </div>
        <div className='lowerSide'>
<div className='listItems'><img src={home} alt="Home" className="listItemsImg"/>Home</div>
<div className='listItems'><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
<div className='listItems'><img src={rocket} alt="Upgrade" className="listItemsImg"/>Upgrade to Pro</div>
         </div>

       </div>
    

       <div className="main">
        <div className='chats'>
          <div className='chat'>
            <img className="chatImg" src={userIcon} alt=""/><p className='txt'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Obcaecati sint nobis exceptur optio voluptas nemo ex officiis eos quam illo? </p>
          </div>
          <div className='chat bot'>
          
            <img className="chatImg" src={gptImgLogo} alt=""/><p className='txt'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolorum, officia laborum provident tempore quisquam pariatur. Unde impedit libero. officiis vero pariatur minima iure. Rerum numquam sed laboriosam ! Earum dignissimos! Quaerat molltia qui molestias ex similique praesentium perspiciatis desurunt! Eveniet itaque culpa consequuntur eius exercitationem ipsum perferendis libero beatae amnis expedita? Magnam similique libero in ducimus amnis ratione inventore quia quae, aliquam consequuntur commodi distintio minus recusandae consectetur quibusdam and officiis officia tenetur mairoes dolorum? Quae repudiandae, excepturi saluta mollitia facere cum. Reudiandae doloribus provident animi fugiat a sunt porro maiores, modi odit quis. </p>
          
          </div>    
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type="text" placeholder="Send a message"/><button className='send'><img src={sendBtn} alt="Send"/></button>
            </div>
        <div>
              <p>
                ChatGPT may produce inaccurate information about people,place, or facts. ChatGPT August 20 Version. 
              </p>
            </div>
          </div>
          </div>
        </div>
      
    
  );
}

export default App;
