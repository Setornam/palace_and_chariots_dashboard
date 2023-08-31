import React, { useState } from 'react';
import Switch from 'react-switch';

const Notification = () => {
  const [requestConfirmation, setRequestConfirmation] = useState(true);
  const [requestChanged, setRequestChanged] = useState(true);
  const [emailNotification, setEmailNotification] = useState(true);

  const handleRequestConfirmationChange = (checked) => {
    setRequestConfirmation(checked);
  };

  const handleRequestChangedChange = (checked) => {
    setRequestChanged(checked);
  };

  const handleEmailNotificationChange = (checked) => {
    setEmailNotification(checked);
  };

  return (
    <div className="notification">
      <div className="feature">
        <label>
          <span>
            <h5>Request Confirmation</h5>
            <p>You will be notified when a customer makes a request</p>
          </span>
          <span className='switch'>
            <Switch
              onChange={handleRequestConfirmationChange}
              checked={requestConfirmation}
              onColor="#0B41AA"
              offColor="#ccc"
              uncheckedIcon={false}
              checkedIcon={false}
              width={45}
              height={23}
              handleDiameter={21} // Set the diameter of the button in the toggle
            />
          </span>
        </label>
      </div>
      <div className="feature">
        <label>
          <span>
            <h5>Request Changed</h5>
            <p>You will be notified when a customer makes a request</p>
          </span>
          <span className='switch'>
            <Switch
              onChange={handleRequestChangedChange}
              checked={requestChanged}
              onColor="#0B41AA"
              offColor="#ccc"
              uncheckedIcon={false}
              checkedIcon={false}
              width={45}
              height={23}
              handleDiameter={21}
            />
          </span>
        </label>
      </div>
      <div className="feature">
        <label>
          <span>
            <h5>Email Notification</h5>
            <p>You will be notified when a customer makes a request</p>
          </span>
          <span className='switch'>
            <Switch
              onChange={handleEmailNotificationChange}
              checked={emailNotification}
              onColor="#0B41AA"
              offColor="#ccc"
              uncheckedIcon={false}
              checkedIcon={false}
              width={45}
              height={23}
              handleDiameter={21}
            />
          </span>
        </label>
      </div>
      {/* Add logic here to save the settings to your backend */}
      <button onClick={() => console.log('Settings saved')}>Save</button>
      <style jsx>{`
        .notification {
          margin-left: 100px;
          padding-top: 1 0px;
        }
        .feature {
          margin-top: 20px;
        }
        .feature label {
          display: flex;
          align-items: center;
        }
        .feature span {
          margin-right: 10px;
        }
        .feature span h5 {
          color: #595959;
          font-size: 14px;
          font-weight: 400;
        }
        .feature span p {
          color: #8B8B8B;
          font-size: 14px;
          font-weight: 400;
        }

        .switch {
          position: relative;
          margin-left: 250px;

        }

        .notification button {
          padding: 10px; 39px;
          width: 155px;
          height: 37px;
          color: #fff;
          background-color: #0B41AA;
          border: none;
          border-radius: 3.48px;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

export default Notification;
