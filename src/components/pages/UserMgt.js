import React, { useState, useEffect, useRef } from 'react';
import {  FiSearch, FiPlusSquare, FiEye } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {  createUserWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { db } from '../auth/firebase';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../auth/firebase'; // Import Firebase Storage
import 'firebase/firestore'; // 



const UserMgt = () => {

    const genderOptions = ['Male', 'Female', ];
    const adminStatusOptions = ['Active', 'Inactive'];
    const accessRoleOptions = ['Standard User', 'System Admin']
    const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null);
    const [admins, setAdmins] = useState([]);
    const profilePhotoInputRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [profilePhotoInputKey, setProfilePhotoInputKey] = useState(0);
    const rowsPerPage = 11;
    

    // Fetch and display table data
    const fetchAdminsData = async (collectionName) => {
        const adminsCollection = collection(db, collectionName);
        const snapshot = await getDocs(adminsCollection);
        const adminsData = snapshot.docs.map((doc) => doc.data());
        return adminsData;
      };

      const updateProfilePhoto = async (userId, newProfilePhoto) => {
        try {
          // Upload the new profile photo
          const storageRef = ref(storage, 'profile-photos/' + newProfilePhoto.name);
          await uploadBytes(storageRef, newProfilePhoto);
          const newProfilePhotoURL = await getDownloadURL(storageRef);
      
          // Update the Firestore document with the new profile photo URL
          const userRef = doc(db, 'superAdmins', userId); // Adjust the collection name
          await setDoc(userRef, { profilePhoto: newProfilePhotoURL }, { merge: true });
      
          return newProfilePhotoURL;
        } catch (error) {
          console.error('Error updating profile photo:', error);
          return null;
        }
      };
      

      const handleProfilePhotoUpdate = async (userId, newProfilePhoto) => {
        const updatedProfilePhotoURL = await updateProfilePhoto(userId, newProfilePhoto);
        if (updatedProfilePhotoURL) {
          // Handle the success, such as updating the UI to display the new profile photo
          console.log('Profile photo updated successfully.');
        } else {
          // Handle the error
          console.error('Failed to update profile photo.');
        }
      };
      
      

      useEffect(() => {
        // Fetch data from different collections
        const fetchData = async () => {
          const superAdminsData = await fetchAdminsData('superAdmins');
          const regularAdminsData = await fetchAdminsData('regular-admins');
          
          
          // Combine the data from different collections into one array
          const allAdminsData = [
            ...superAdminsData,
            ...regularAdminsData,
           
          ];

          setAdmins(allAdminsData);
        };
    
        fetchData();
      }, []);

      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const pageData = admins.slice(startIndex, endIndex);
    
      const totalPages = Math.ceil(admins.length / rowsPerPage);

      const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= Math.ceil(admins.length / rowsPerPage)) {
          setCurrentPage(newPage);
        }  };

    



    const [formData, setFormData] = useState({
        firstName: '',
        middleName:'',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        dateEmployed: '',
        status: '',
        accessRole: '',
        employeeId: '',
        email: '',
        workPhone: '',
        profilePhoto: null, // For file upload
        
      });

      

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleProfilePhotoChange = (e) => {
        const file = e.target.files[0];
        setSelectedProfilePhoto(file);
      };
    
      const generateRandomPassword = () => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
    
        for (let i = 0; i < 12; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset.charAt(randomIndex);
        }
    
        return password;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        
      
       
      
        
      
        try {
            
            // Create a user with email and password
            const { user } = await createUserWithEmailAndPassword(auth, formData.email, generateRandomPassword());
        
            // Send a verification email to the user
            await sendEmailVerification(user);

             // Upload profile photo if selected
    if (selectedProfilePhoto) {
      const updatedProfilePhotoURL = await updateProfilePhoto(user.uid, selectedProfilePhoto);
      if (updatedProfilePhotoURL) {
        // Handle the success, such as updating the UI to display the new profile photo
        console.log('Profile photo updated successfully.');
      } else {
        // Handle the error
        console.error('Failed to update profile photo.');
      }
    }
        
            // Create a new Firestore document with the form data
            const regularAdminCollection = collection(db, 'superAdmins'); // Replace with your collection name
        
            // Set the document data
            const docRef = await addDoc(regularAdminCollection, {
              firstName: formData.firstName,
              middleName: formData.middleName,
              lastName: formData.lastName,
              dateOfBirth: formData.dateOfBirth,
              gender: formData.gender,
              dateEmployed: formData.dateEmployed,
              status: formData.status,
              accessRole: formData.accessRole,
              employeeId: formData.employeeId,
              email: formData.email,
              workPhone: formData.workPhone,
              profilePhoto: selectedProfilePhoto ? selectedProfilePhoto.name : null,

              
            });

          
      
          // Clear the form
          setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            dateOfBirth: '',
            gender: '',
            dateEmployed: '',
            status: '',
            accessRole: '',
            employeeId: '',
            email: '',
            workPhone: '',
            profilePhoto: null,
          });

          // Send a password reset email to the user's email address
         await sendPasswordResetEmail(auth, formData.email);
      
         console.log('User created successfully with ID: ', docRef.id);
        console.log('Password reset email sent successfully!');
  } catch (error) {
        console.error('Error creating user or sending email: ', error);
  }
      };
      

  

    const [isTabActive, setIsTabActive] = useState(false);


    const toggleTab = () => {
        setIsTabActive(!isTabActive);
      };




    const [profilePhoto, setProfilePhoto] = useState(null);

    const handlePhotoChange = async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        try {
          const resizedImage = await resizeImage(selectedFile, 150, 150);
          setProfilePhoto(URL.createObjectURL(resizedImage));
        } catch (error) {
          console.error('Error resizing image:', error);
        }
      } else {
        // Clear the profile photo when no file is selected
        setProfilePhoto(null);
      }
    
      // Reset the profile photo input field
      if (profilePhotoInputRef.current) {
        profilePhotoInputRef.current.value = '';
      }
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
    <div>
        <div>
            <div className='customers-container'>
                <div className='top-bar' >
                    <span className="heading-container">
                        <h1>Employees</h1>
                    </span>
                    <span className="search-container">
                    <div className='search-container'>
                    <div className="search-box">

                    <div className="search-icon">
                        <FiSearch size={18} color="#8B8B8B" /> {/* Use FiSearch icon */}
                    </div>
                        <input
                            type="text"
                            placeholder="Search employee(Eg. Employee Name, Employee email"
                            className="search-input"
                        />
                    
                    </div>
                </div>
                    </span>
                    <span className="add-container">
                        
                        <div
                            className={`tab ${isTabActive ? 'active' : ''}`}
                            onClick={toggleTab}
                        >
                            <FiPlusSquare size={32} color="#071EC3" cursor="pointer" />
                        </div>
                    </span>
                    
                </div>
                

            <style jsx>
                {`
                .customers-container{
                    background-color:#fff;
                    width: 77.27vw;
                    height: 95.16vh;
                    position: relative;
                    left: 1.56vw;
                    top: -5.76vh;
                    border-radius:6px;
                }

                .content-area{
                    background-color: #fff;
                    height: 96.16vh;
                    width: 100%;
                    position: relative;
                    top: -11.86vh;
                    border-radius:6px;
                    overflow: scroll ;
                    overflow-x: hidden;
                    scrollbar-width: thin;
                    scrollbar-color: #071EC3 #F0F0F0;

                }


                .content-area::-webkit-scrollbar {
                     width: 4px; 
                }

                .content-area::-webkit-scrollbar-thumb {
                    background-color: #0B41AA;
                    border-radius: 10px;
                }

                .content-area::-webkit-scrollbar-track {
                    background-color: #cdcdcd;
                    border-radius: 10px;
                }

                .top-bar{
                    display: flex;
                    height: 11.52vh;
                    width: 100%;
                    border-radius: 6px 6px 0 0;
                }

                #top-bar-create{
                    display: flex;
                    flex-direction: column;
                }
                
                .heading-container{
                    width: 50%;
                    padding-left: 3.9vw;
                    flex: 1;
                }

                .add-container{
                    flex: 0.5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .heading-container h1{
                    font-size: 24px;
                    color: #595959;
                    font-weight: 600;
                    padding-top: 2.3vh;                    
                }

                .search-container{
                    display:flex;
                    flex: 2;
                    justify-content: center;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 40.16vw;
                    height: 38px;
                    border: 0.50px #CDCDCD solid;
                    border-radius: 5px;
                    margin-top: 3.456vh;
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
                    padding-left: 15px;
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

                .active-requests-table{
                    width: 77.34vw;
                    height: 10vh;
                    max-height: 56.3vh;
                    position: relative;
                    top: 4.608vh;
                    border-bottom: 1px solid #CDCDCD ;
                    padding-bottom: 3.456vh;
                }

                .active-requests-table th{
                    color: #595959;
                    font-size: 14px;
                    font-weight: 600;
                    text-align: left;
                    padding: 0 1.56vw 0 3.9vw;
                    position: relative;
                    top: -1.728vh;
                
                }

                .active-requests-table td{
                    color: #595959;
                    font-size: 14px;
                    font-weight: 400;
                    padding: 2.995vh 1.56vw 0 3.9vw;
                }

            

                .icon{
                    font-size: 16px ;
                    position: relative;
                    top: 2px;
                    padding-left: 10px;
                    color: #2F2D2D;
                    padding-right: 5px;
                    cursor: pointer;
                }

                .edit-profile {
          margin-left: 50px;
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
          width: 370px;
          height: 39px;
          border: 0.35px #CDCDCD solid;
          border-radius: 3.48px;
          padding: 0 15px;
        }

        .left-column button{
          width: 325px;
          height: 38px;
          margin: 30px 0;
          background-color: #0B41AA;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 3.48px;
          cursor: pointer;
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

        .table-row{
            vertical-align: top;
            height: 4.125vh;
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

        #date-of-birth, #date-employed{
            width: 175px;
        }

        .dob{
            display: flex;
            align-content: center;
            
        }

        .dob span{
            margin-right: 20.83px;
        }

        select{
            width: 175px;
            height: 40px;
            cursor: pointer;
            border: 1px solid #cdcdcd;
            border-radius:5px;
            padding: 5px 10px;
        }

        .pagination {
              display: flex;
              color: #595959;
              justify-content: end;
              align-items: center;
              margin-top: 50px;
              margin-right: 3.5%;
              font-weight: 600;
              font-size: 11px;
            }

            .pagination .button {
              margin: 0 5px;
              cursor: pointer;
              background-color: white;
              width: 11px;
              display: flex;
              border: 2px solid #CDCDCD;
              color: #CDCDCD;
              border-radius: 5px;
              padding: 1px 5px;
              justify-content: center;
              align-items: center;
              font-size: 22px;
            }

            #access-role{
                width: 402px;
            }
                
                `}
            </style>
            <div className='table'>
                {/* Content area that appears when the tab is active */}
            {isTabActive && (
              <div className="content-area">
                {/* Content goes here */}
                <div className='top-bar' id='top-bar-create'>
                    <span className="heading-container">
                        <h1>Create Employees / User Account</h1>
                    </span>
                    <div className='edit-profile'>
                        <div className="left-column">
                            <br></br>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="first-name">First Name</label>
                                    <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                    />
                                    
                                    
                                    <label htmlFor="middle-name">Middle Name</label>
                                    <input
                                    id="middle-name"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder=""
                                    />

                                    <label htmlFor="last-name">Last Name</label>
                                    <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                    />

                                    <div className='dob'>
                                        <span>
                                            <label htmlFor="date-of-birth">Date of Birth</label>
                                            <input
                                            id="date-of-birth"
                                            name="dateOfBirth"
                                            type="date"
                                            value={formData.dateOfBirth}
                                    onChange={handleChange}
                                            required
                                            placeholder=""
                                            />
                                        </span>

                                        <span className='gender'>
                                            <label htmlFor='gender'>Gender</label>
                                            <select
                                                name="gender"
                                                id='gender'
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                                >
                                                <option value="" disabled>Gender</option>
                                                {genderOptions.map((option, index) => (
                                                    <option key={index} value={option}>
                                                    {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </span>
                                    </div>

                                    <div className='dob'>
                                        <span>
                                            <label htmlFor="date-employed">Date Employed</label>
                                            <input
                                            id="date-employed"
                                            name="dateEmployed"
                                            type="date"
                                            value={formData.dateEmployeed}
                                            onChange={handleChange}
                                            required
                                            placeholder=""
                                            />
                                        </span>

                                        <span className='gender'>
                                            <label htmlFor='admin-status'>Status</label>
                                            <select
                                                name='status'
                                                id='admin-status'
                                                value={formData.adminStatus}
                                                onChange={handleChange}
                                                required
                                                
                                            >
                                                <option value= "" disabled >
                                                Status
                                                </option>
                                                {adminStatusOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                                ))}
                                            </select>
                                        </span>
                                    </div>

                                    <label htmlFor='access-role'>Access Role</label>
                                            <select
                                                name='accessRole'
                                                id='access-role'
                                                value={formData.accessRole}
                                                onChange={handleChange}
                                                required
                                                
                                            >
                                                <option value= "" disabled>
                                                Role
                                                </option>
                                                {accessRoleOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                                ))}
                                            </select>

                                   

                                    <label htmlFor="employee-id">Employee ID #</label>
                                    <input
                                    id="employee-id]"
                                    name="employeeId"
                                    type="text"
                                    value={formData.employeeId}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                    />

                                    <label htmlFor="email">Work Email (Primary Email)</label>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                    />

                                    <label htmlFor="work-phone">Work Phone</label>
                                    <input
                                    id="work-phone"
                                    name="workPhone"
                                    type="tel"
                                    value={formData.workPhone}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                    />

                                    
                        
                                </div>

                            <div>
                                <button type="submit">Generate Password and Send</button>
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
              src="/placeholder-profile.png" 
              alt="Profile"
            />

            
            <div className="photo-upload">
              <p>photo_file_name.jpg</p>
              <p>file size: 12kb</p>
              <label className="file-input">
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  ref={profilePhotoInputRef} 
                  key={profilePhotoInputKey} 


                />
                <span>Choose File</span>
                
              </label>


            </div>
            
          </div>
        )}
      </div>
             
                    </div>
                    
                    
                </div>
              </div>
            )}
                    <table className="active-requests-table">
                        <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>First Name </th>
                            <th>Email</th>
                            <th>Access Role</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                            {pageData.map((admin, index) => (
                            <tr className='table-row' key={index}>
                            <td>{admin.lastName}</td>
                            <td>{admin.firstName}</td>
                            <td>{admin.email}</td>
                            <td>{admin.accessRole}</td>
                            <td>
                                <FiEye className='icon'/>
                                <BiEditAlt className='icon'/>
                                <RiDeleteBin6Line className='icon'/>
                            </td>
                            </tr>
                        ))}
                        
                        
                        
                        
                        
                        
                        </tbody>
                    </table>
                    
                </div>
                <div className="pagination">
        
          
        <FaArrowLeft className='button'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}/>

        <span>Page {currentPage}</span>
        
          <FaArrowRight className='button'
            disabled={currentPage === Math.ceil(admins.length / rowsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
          />
        
    </div>
        </div>
        
        
        </div>
    </div>
  )
}

export default UserMgt;
