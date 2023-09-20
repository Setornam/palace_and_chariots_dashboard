import React, { useState }from 'react';
import { FiSearch } from 'react-icons/fi';
import placeholderProfile from '../Images/placeholder-profile.png'
import Car from '../Images/car.png'
import StarRating from '../Images/star-rating.png'


const Messages = () => {

    const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      // Add the message to the chat log
      setChatLog([...chatLog, message]);
      // Clear the message input
      setMessage('');
    }
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
                        <span className="message-number">15</span>
                    </div>
                    <div className="message-item active-message">
                        <div className="message-dd">
                            <span className="left-span">
                                <img src={placeholderProfile} alt="Profile" className="profile-image"  />

                            </span>
                            <span className="middle-span">
                                <h4>James Fisher</h4>
                                <p>fisher@gmail.com</p>
                            </span>
                            <span className="right-span">
                                <p>15min ago</p>
                            </span>
                        </div>
                        <div className="message-message">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="message-item">
                        <div className="message-dd">
                            <span className="left-span">
                                <img src={placeholderProfile} alt="Profile" className="profile-image"  />

                            </span>
                            <span className="middle-span">
                                <h4>James Fisher</h4>
                                <p>fisher@gmail.com</p>
                            </span>
                            <span className="right-span">
                                <p>15min ago</p>
                            </span>
                        </div>
                        <div className="message-message">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="message-item">
                        <div className="message-dd">
                            <span className="left-span">
                                <img src={placeholderProfile} alt="Profile" className="profile-image"  />

                            </span>
                            <span className="middle-span">
                                <h4>James Fisher</h4>
                                <p>fisher@gmail.com</p>
                            </span>
                            <span className="right-span">
                                <p>15min ago</p>
                            </span>
                        </div>
                        <div className="message-message">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="message-item">
                        <div className="message-dd">
                            <span className="left-span">
                                <img src={placeholderProfile} alt="Profile" className="profile-image"  />

                            </span>
                            <span className="middle-span">
                                <h4>James Fisher</h4>
                                <p>fisher@gmail.com</p>
                            </span>
                            <span className="right-span">
                                <p>15min ago</p>
                            </span>
                        </div>
                        <div className="message-message">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="message-item">
                        <div className="message-dd">
                            <span className="left-span">
                                <img src={placeholderProfile} alt="Profile" className="profile-image"  />

                            </span>
                            <span className="middle-span">
                                <h4>James Fisher</h4>
                                <p>fisher@gmail.com</p>
                            </span>
                            <span className="right-span">
                                <p>15min ago</p>
                            </span>
                        </div>
                        <div className="message-message">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div className="message-item">
                        <div className="message-dd">
                            <span className="left-span">
                                <img src={placeholderProfile} alt="Profile" className="profile-image"  />

                            </span>
                            <span className="middle-span">
                                <h4>James Fisher</h4>
                                <p>fisher@gmail.com</p>
                            </span>
                            <span className="right-span">
                                <p>15min ago</p>
                            </span>
                        </div>
                        <div className="message-message">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>
                </div>
         </div>
         <div className="message-content">
            <div className="message-title">
                <div>
                    <img src={Car} 
                    alt="Product" 
                    className="product-image"  />
                </div>
                <div className="product-detail">
                    <h4>Mercedes-Benz C300</h4>
                    <div className="details-span">
                        <span><p>Grey</p></span>
                        
                        <p style={{color:'#5B5B5B', fontSize:'14px'}}><img src={StarRating} alt="Star Rating" className="star-rating"  />4.5</p>
                    </div>
                    <h3>GHS500,000</h3>
                </div>
            </div>
            <div className="main-message">
                <div className="message-date">
                    <span><hr></hr></span>
                    <span><p>Today</p></span>
                    <span><hr></hr></span>
                </div>
                <div className="message-string">
                    <span className="message-left-span">
                        <img src={placeholderProfile} alt="Profile" className="profile-image"  />
                    </span>
                    <div className="message-right-span">
                        <div className="inner-message">
                            <span className="message-sender"><p>James Fisher</p></span>
                            <span className="message-time"><p>2:22pm</p></span>
                        </div>
                        <div className="message-post">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    
                </div>

                <div className="message-string">
                   
                    <div className="admin-message-right-span">
                        <div className="admin-inner-message">
                            
                            <span className="message-time"><p>Just Now</p></span>
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
                        <textarea
                        rows="4"
                        placeholder="Type your message..."
                        value={message}
                        onChange={handleInputChange}
                        />
                        <div className="button-container">
                            <button onClick={handleSendClick}>Send</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
         </div>
         
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
            padding-left: 10px;
            width: 415px;
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
            height: 56px;
            width: 415px;
            margin-top: -15px;
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
            left: 90px;
         }

         


         .customers-container{
             display: flex;
             background-color:#fff;
             width: 989px;
             height: 826px;
             position: relative;
             left: 20px;
             top: -50px;
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
             padding-top: 20px;                    
         }

         

         .search-container{
                    display:flex;
                    justify-content: start;
                    width: 100%;
                    padding-right: 30px;
                    margin-top: -25px;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 247px;
                    height: 38px;
                    border: 0.50px #CDCDCD solid;
                    border-radius: 5px;
                    margin-top: 30px;
                }

                .search-input {
                    flex: 1;
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
                    margin-top: 20px;
                }

                .message-div{
                    display: flex ;
                    height: 20px;
                    padding-bottom: 10px;
                    align-items: center
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
                    padding: 15px 0px;
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
                    padding: 0 0 0 15px;
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
                    padding: 0 19px;
                }

                .right-span p{
                    margin-top: 3px;
                }

                .profile-image {
                    width: 27px;
                    opacity: 0.3;
                }

                .message-list-container {
                    padding: 0 20px 0 0;
                    height: 690px; 
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
                    max-height: 732px;
                    position: absolute;
                    bottom: 180px;
            
                }

                .message-date{
                    display: flex;
                    justify-content: center;
                    align-items: bottom;
                    position: relative;
                    top: 0px;
                }

                .message-date hr{
                    width: 251px;
                    height: 0px;
                    border-bottom: 0.5px solid #CDCDCD; 
                    border-top: none;                
                }

                .message-date p{
                    position: relative;
                    top: -15px;
                    padding: 0 20px;
                    color: #595959;
                    font-size: 14px;
                    font-weight: 400;
                }

                .chat-box {
                    margin-top: 40px;
            width: 626px;
            height: 112px;
            border: 0.5px solid #CDCDCD;
            padding: 10px;
            border-radius: 5px;
            position: fixed;
            bottom:30px;
          }

          .chat-log {
            max-height: 112px;
            overflow-y: hidden;
          }

          .chat-message {
            background-color: #f0f0f0;
            height: 112px;
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