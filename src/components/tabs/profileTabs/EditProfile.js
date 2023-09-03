import React, { useState } from 'react';



const EditProfile = () => {

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      try {
        // eslint-disable-next-line no-undef
        const resizedImage = await resizeImage(selectedFile, 70, 70); // Resize image to 70x70
        setProfilePhoto(URL.createObjectURL(resizedImage));
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission using Firebase or any other backend
    // For example, you can collect form data using e.target.elements and then send it to Firebase
    // Make sure to import Firebase or any other necessary dependencies
  };

  const resizeImage = (file, width, height) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, { type: file.type });
          resolve(resizedFile);
        }, file.type);
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = event.target.result;
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

  return (
    <div className="edit-profile">
      <div className="left-column">
      <br></br>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              placeholder=""
            />

            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              required
              placeholder=""
            />

            <label htmlFor="email-address">Email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder=""
            />

            <label htmlFor="contact-number">Contact Number</label>
            <input
              id="contact-number"
              name="contactNumber"
              type="text"
              required
              placeholder=""
            />

            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              required
              placeholder=""
            />

            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder=""
            />
          </div>

          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>

      
      <div className="right-column">
        <br></br>
        <br></br>
        
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt="Profile"
            className="profile-photo"
          />
        ) : (
          <div className="placeholder-profile-photo">
            <img
              src="/placeholder-profile.png" // Replace with the actual placeholder image path
              alt="Profile"
            />

            
            <div className="photo-upload">
              <p>photo_file_name.jpg</p>
              <p>file size: 12kb</p>
              <label className="file-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
                <span>Choose File</span>
                
              </label>


            </div>
            
          </div>
        )}
      </div>

      <style jsx>{`
        .edit-profile {
          margin-left: 70px;
          display: flex;
          width: 95%;
        }

        .left-column {
          width: 50%;
        }

        .edit-profile label{
          display: block ;
          color: #505050;
          font-size: 14px;
          font-weight: 400;
          padding-top: 20px;
          padding-bottom: 5px;
        }

        .edit-profile input {
          width: 370.83px;
          height: 39px;
          border: 0.35px #CDCDCD solid;
          border-radius: 3.48px;
          padding: 0 15px;
        }

        .left-column button{
          width: 194px;
          height: 38px;
          margin-top: 30px;
          background-color: #0B41AA;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 3.48px;
        }


        .right-column {
          width: 50%; 

        }

        .placeholder-profile-photo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 119px;
          height: 117px;
          margin-top: 20px;
          margin-left: 0px;
        }
        .placeholder-profile-photo img {
          width: 70px;
          height: 70px;
          opacity: 0.5;
        }

        .photo-upload{
          position: relative;
          left: 160px;
        }

        .photo-upload p{
          color: #8B8B8B;
          font-size: 14px;
        }

        .photo-upload input{
          border: none;
        
        }

        .file-input {
          display: inline-block;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          border: none;
        }

        .file-input input[type="file"] {
          display: none;
        }

        .file-input span {
          display: inline-block;
          text-align: center;
          padding: 10px 0px;
          color: white;
          width: 140px;
          background-color: #0B41AA;
          border-radius: 3.48px;
          border: none;
          margin-left: -15px;
          margin-top: -15px;
          margin-bottom: 5px;
        }

      `}</style>
    </div>
  );
};

export default EditProfile;
