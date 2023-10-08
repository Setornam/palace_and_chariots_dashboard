import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import placeholderProfile from '../Images/placeholder-profile.png';
import Car from '../Images/car.png';
import StarRating from '../Images/star-rating.png';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../auth/firebase';

const Messages = () => {
    const [chatsData, setChatsData] = useState([]); 
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);  
    const [activeChatContent, setActiveChatContent] = useState(null);
    const [chatCount, setChatCount] = useState(0); 

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleChatItemClick = (chatId) => {
    // Set the active chat when a chat item is clicked
    setActiveChatId(chatId);
  };


  // useEffect should be directly inside the functional component
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch chats
        const chatsCollection = collection(db, 'chats');
        const chatsSnapshot = await getDocs(chatsCollection);
        const chatsData = chatsSnapshot.docs.map((doc) => doc.data());
        setChatsData(chatsData);
        console.log('This is the purse chats data',chatsData);

        // Set the count of chats
        setChatCount(chatsSnapshot.size);

    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run this effect once on component mount

  const handleSendClick = () => {
    if (message.trim() !== '') {
      // Add the message to the chat log
      setChatLog([...chatLog, message]);
      // Clear the message input
      setMessage('');
    }
  };


   // Render chat content based on the active chat
   const renderChatContent = () => {
    if (activeChatId !== null) {
      // Find the active chat in chatsData based on activeChatId
      const activeChat = chatsData.find((chat) => chat.id === activeChatId);

      if (activeChat) {
        return (
          <div className="message-content">
            {/* Render content specific to the active chat */}
            <div className="message-title">
              <div>
                <img src={Car} alt="Product" className="product-image" />
              </div>
              <div className="product-detail">
                <h4>{activeChat.name}</h4>
                <div className="details-span">
                  <span>
                    <p>{activeChat.productColor}</p>
                  </span>
                  <p style={{ color: '#5B5B5B', fontSize: '14px' }}>
                    <img src={StarRating} alt="Star Rating" className="star-rating" /> {activeChat.starRating}
                  </p>
                </div>
                <h3>{activeChat.productPrice}</h3>
              </div>
            </div>
            {/* Render other chat content */}
            {/* ... */}
          </div>
        );
      }
    }

    // Default content when no chat is active
    return null;
  };

  
    return (
        <div>
             <div>
    <div className='customers-container'>
     <div className='top-bar'>
         <div className="heading-container">
             <h1>Messages</h1>
             <div className='search-container'>
                    <div className="search-box">

                    <div className="search-icon">
                        <FiSearch size={18} color="#8B8B8B" /> {/* Use FiSearch icon */}
                    </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    
                    </div>
                </div>

                <div className="message-list-container">
                <div className="message-list">
                <div className="message-div">
                    <span><h6>Messages</h6></span>
                    <span className="message-number">{chatCount}</span>
                </div>
                    {chatsData.map((chat) => (
                    
                    <div
                        key={chat.id}
                        className={`message-item ${chat.id === activeChatId ? 'active-message' : ''}`}
                        onClick={() => setActiveChatId(chat.id)} 
                    >
                    {/* {"Chat content"} */}
                        
                        <div className="message-dd">
                        <span className="left-span">
                            <img src={placeholderProfile} alt="Profile" className="profile-image" />
                        </span>
                        <span className="middle-span">
                            <h4>{chat.name}</h4>
                            <p>{chat.user_email}</p>
                        </span>
                        <span className="right-span">
                            {/* <p>{chat.chat_start_time}</p> */}
                        </span>
                        </div>
                        <div className="message-message">
                        <p>{chat.message}</p>
                        </div>
                    </div>
                    ))}

                   


                    

                   
                </div>
                </div>
         </div>
         {activeChatId !== null && (
  <div className="message-content">
    <div className="message-title">
      <div>
        <img src={Car} alt="Product" className="product-image" />
      </div>
      <div className="product-detail">
        <h4>Mercedes-Benz C300</h4>
        <div className="details-span">
          <span>
            <p>Grey</p>
          </span>
          <p style={{ color: '#5B5B5B', fontSize: '14px' }}>
            <img src={StarRating} alt="Star Rating" className="star-rating" />4.5
          </p>
        </div>
        <h3>GHS500,000</h3>
      </div>
    </div>
    <div className="main-message">
      <div className="message-date">
        <span>
          <hr />
        </span>
        <span>
          <p>Today</p>
        </span>
        <span>
          <hr />
        </span>
      </div>
      <div className="message-string">
        <span className="message-left-span">
          <img src={placeholderProfile} alt="Profile" className="profile-image" />
        </span>
        <div className="message-right-span">
          <div className="inner-message">
            <span className="message-sender">
              <p>James Fisher</p>
            </span>
            <span className="message-time">
              <p>2:22pm</p>
            </span>
          </div>
          <div className="message-post">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </div>
      </div>

      <div className="message-string">
        <div className="admin-message-right-span">
          <div className="admin-inner-message">
            <span className="message-time">
              <p>Just Now</p>
            </span>
          </div>
          <div className="admin-message-post">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </div>
      </div>

      <div className="chat-box">
        <div className="chat-log">
          {chatLog.map((msg, index) => (
            <div key={index} className="chat-message">
              {msg}
            </div>
          ))}
        </div>
        <div className="input-box">
          <textarea rows="4" placeholder="Type your message..." value={message} onChange={handleInputChange} />
          <div className="button-container">
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

         
     </div>
     

     <style jsx>
         {`

         .inner-message{
            display: flex;
         }

         .message-string{
            display: flex;
         }

         .message-left-span{
            height: 39px;
            width: 39px;
            border: 0.5px solid #CDCDCD;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

         }

         .message-right-span{
            padding-left: 0.78vw;
            width: 32.42vw;
         }

         .admin-message-right-span{
            width: 100%;
            
         }

         .admin-inner-message{
            display: flex;
            position: relative;
            left: 85%;
            bottom: px;
         }

         .message-sender, .message-time, .message-post p, .admin-message-post p{
            flex: 2;
            font-size: 14px;
            font-weight: 400;
            color: #595959;
         }

         .message-post, .admin-message-post{
            height: 6.45vh;
            width: 32.42vw;
            margin-top: -1.73vh;
            border-radius: 5px;
            background-color: #DFE2FA;
         }

         .admin-message-post{
            margin-left: 40%;
         }

         .message-post p, .admin-message-post p{
            padding:10px 30px 10px 10px;

         }

         .message-time{
            flex: 1;
            position: relative;
            left: 7.03vw;
         }

         


         .customers-container{
             display: flex;
             background-color:#fff;
             width: 77.27vw;
             height: 95.16vh;
             position: relative;
             left: 1.56vw;
             top: -3.9vh;
             border-radius:6px;
         }

         .top-bar{
             display: flex;
             height: 100%;
             width: 100%;
             border-radius: 6px 6px 0 0;
         }
         
         .heading-container{
             width: 32%;
             height: 100%;
             padding-left: 20px;
             border-right: 0.5px solid #CDCDCD;
         }

         .heading-container h1{
             font-size: 24px;
             color: #595959;
             font-weight: 600;
             padding-top: 2.3vh;
         }

         

         .search-container{
                    display:flex;
                    justify-content: start;
                    width: 100%;
                    padding-right: 2.34vw;
                    margin-top: -2.88vh;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 23.397vw;
                    height: 38px;
                    border: 0.50px #CDCDCD solid;
                    border-radius: 5px;
                    margin-top: 3.456vh;
                }

                .search-input {
                    flex: 1;
                    width: 100%;
                    border: none;
                    outline: none;
                    padding: 5px;
                    border-radius: 5px;
                    color: #8B8B8B;
                }

                .search-icon {
                    padding: 5px;
                    background-color: white;
                    border-radius: 0 5px 5px 0;
                    cursor: pointer;
                }

                .search-icon i {
                    font-size: 18px;
                }
                
                .search-input::placeholder {
                    color: #8B8B8B;
                    font-size: 14px;
                    font-weight: 400; 
                }

                .message-list {
                    height: 100%;
                    margin-top: 2.3vh;
                }

                .message-div{
                    display: flex ;
                    height: 2.30vh;
                    padding-bottom: 1.15vh;
                    align-items: center;
                }

                .message-div h6{
                    padding-left: 0.5vw;                    

                }

                .active-message {
                    background-color: #DFE2FA;
                    }


                .message-number {
                    background-color: #071EC3;
                    width: 32px;
                    height: 20px; 
                    color: #FFFFFF;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 18px;
                    font-size: 12px;
                    font-weight:  
                }

                .message-list span h6{
                    font-size: 14px;
                    color: #595959;
                    font-weight: 400;
                    width: 80px;
                }

                .message-item {
                    background-color: white;
                    padding: 1.73vh  0.5vw;
                    cursor: pointer;
                    border-radius: 5px;
                }

                .message-dd{
                    display: flex;
                }

                .left-span {
                    width: 39px;
                    border: 1px solid #CDCDCD;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 39px;
                }

                .middle-span {
                    flex: 0.8;
                }

                .middle-span h4, .middle-span p{
                    padding: 0 0 0 1.17vw;
                    margin: 0;
                    box-sizing: border-box;
                    color: #595959;
                }

                .middle-span h4{
                    font-size: 14px;                    
                    font-weight: 700;
                }

                .middle-span p, .right-span p, .message-message{
                    font-size: 11px;
                    font-weight: 400;
                }

                .message-message{
                    padding: 0 1.48vw;
                }

                .right-span p{
                    margin-top: 0.35vh;
                }

                .profile-image {
                    width: 27px;
                    opacity: 0.3;
                }

                .message-list-container {
                    padding: 0 1.56vh 0 0;
                    height: 79.5vh; 
                    overflow: scroll ;
                    overflow-x: hidden;
                    scrollbar-width: thin;
                    scrollbar-color: #071EC3 #F0F0F0;
                }

                .message-list-container::-webkit-scrollbar {
                     width: 4px; 
                }

                .message-list-container::-webkit-scrollbar-thumb {
                    background-color: #0B41AA;
                    border-radius: 10px;
                }

                .message-list-container::-webkit-scrollbar-track {
                    background-color: #cdcdcd;
                    border-radius: 10px;
                }

                .product-image{
                    width: 77px;
                    height: 66px;
                }

                .product-detail{
                    padding: 0 0 0 15px;
                    
                }

                .product-detail *{
                    margin: 0px;
                    padding: 0px;
                }


                .product-detail h4{
                    font-size: 14px;
                    color: #545454;
                    font-weight: 700;
                    position: relative;
                    
                }

                .details-span{
                    display: flex;
                }

                .details-span span{
                    margin-right: 15px;
                    color: #5B5B5B;
                    font-size: 14px;
                    font-weight:400;
                }
                .start-rating{
                    margin-right: 15px;
                }

                .product-detail h3{
                    font-size: 14px;
                    font-weight: 700;
                    color: #071EC3;
                }
                .message-title{
                    display: flex;
                    height: 100%;
                }

                .message-content{
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
                    padding: 15px 0 0 15px;
                    width: 80%;
                    height:94px;
                }
                
                .main-message{
                    max-height: 84.33vh;
                    position: absolute;
                    bottom: 20.7vh;
            
                }

                .message-date{
                    display: flex;
                    justify-content: center;
                    align-items: bottom;
                    position: relative;
                    top: 0px;
                }

                .message-date hr{
                    width: 19.6vw;
                    height: 0px;
                    border-bottom: 0.5px solid #CDCDCD; 
                    border-top: none;                
                }

                .message-date p{
                    position: relative;
                    top: -1.73vh;
                    padding: 0 1.56vw;
                    color: #595959;
                    font-size: 14px;
                    font-weight: 400;
                }

                .chat-box {
                    margin-top: 4.61vh;
                    width: 48.9vw;
                    height: 12.9vh;
                    border: 0.5px solid #CDCDCD;
                    padding: 10px;
                    border-radius: 5px;
                    position: fixed;
                    bottom:3.456vh;
                }

                .chat-box textarea:focus {
                    border: none !important;
                    outline: none !important;
                }

                .chat-log {
                    max-height: 12.9vh;
                    overflow-y: hidden;
                }

                .chat-message {
                    background-color: #f0f0f0;
                    height: 12.9vh;
                    margin: 5px;
                    padding: 5px;
                    border-radius: 5px;
                }

                .input-box {
                    display: flex;
                    flex-direction: column;
                }

                textarea {
                    flex: 1;
                    border: none;
                    padding: 5px;
                    resize: none;
                }

                button {
                    background-color: #071EC3;
                    width: 76px;
                    height: 38px;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .button-container{
                    display: flex;
                    flex-direction: column;
                    align-items: end;

                }

                .active-message{
                    background-color: #DFE2FA;
                }
         
         `}
     </style>
 </div>
 </div>
        </div>
    );
};

export default Messages;