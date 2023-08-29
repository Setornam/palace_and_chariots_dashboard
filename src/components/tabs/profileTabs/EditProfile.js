import React from 'react';

const EditProfile = () => {
  return (
    <div className="edit-profile">
        <div className="left-column">
            <h2>Form Column</h2>
            
            
        </div>
        <div className="right-column">
            <h2>Profile Column</h2>
        </div>
      
      <style jsx>{`
        .edit-profile {
          margin-left: 100px;
        }

        .edit-profile {
            display: flex;
            width: 150%;
        }

        .left-column {
            width: 50%;
        }
      `}</style>
    </div>
  );
};

export default EditProfile;
