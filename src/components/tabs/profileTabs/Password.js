import React, { useState } from 'react';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle password change, validate passwords, and update backend
    console.log('Password change submitted');
  };

  return (
    <div className="password">
      <div className="password-change">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="current-password">Current Password</label>
            <input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>

      <div className='password-rules'>
        <div className="rules-container">
          <div className='to-center'>
            <h3>Rules for Password</h3>
            <p>To create a new password, you have to meet all of the following requirement</p>
            <ul>
              <li>Minimum of 8 characters</li>
              <li>At least one special character</li>
              <li>At least one number</li>
              <li>Can not be the same as the previous</li>
            </ul>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .password {
          margin-left: 70px;
          margin-top: 30px;
          display: flex;
        }
        .form-field {
          margin-top: 20px;
        }
        .form-field label {
          display: block;
          color: #595959;
          font-size: 14px;
          font-weight: 400;
          padding-bottom: 10px;
        }
        .form-field input {
          width: 363px;
          height: 38px;
          border: 0.35px #CDCDCD solid;
          border-radius: 3.48px;
          padding: 0 15px;
        }
        button {
          width: 194px;
          height: 38px;
          margin-top: 20px;
          background-color: #0B41AA;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 3.48px;
          cursor: pointer;
        }

        .password-change {
          width: 50%;
        }

        .password-rules {
          margin-left: 0px;
        }

        .rules-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 296px;
          height: 279.59px;
          background-color: #ECF0F4;
          border-radius: 6.38px;
          padding: 0 0 0 20px;
        }


        .rules-container h3{
          color: #071EC3;
          font-size: 15px;
          font-weight: 600;

        }

        .rules-container p{
          color: #595959;
          font-size: 14px;
          font-weight: 400;
          width: 220px;
          margin-top: 25px;
        }

        .rules-container ul{
          width: 220px;
          color: #595959;
          font-size: 14px;
          font-weight: 400;
          margin-left: -15px;
          margin-top: 25px;

        }

        
      `}</style>
    </div>
  );
};

export default Password;
