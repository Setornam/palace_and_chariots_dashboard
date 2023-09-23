import React from 'react'
import {  FiSearch, FiPlusSquare, FiEye } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';




const UserMgt = () => {

    const navigate = useNavigate();

    const handleIconClick = () => {
        // Navigate to the CreateAccount component
        navigate('/CreateAccount');
    
    };

    const handleViewClick = () => {
        // Navigate to the CreateAccount component
        navigate('/ViewAccount');
    
    };

    
  return (
    <div>
        <div>
            <div className='customers-container'>
                <div className='top-bar'>
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
                        
                        <NavLink to="/create-account" >
                            <FiPlusSquare 
                            size={32} 
                            color='#071EC3' 
                            cursor='pointer'
                            onClick={handleIconClick}
                            />
                        </NavLink>
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

                .top-bar{
                    display: flex;
                    height: 11.52vh;
                    width: 100%;
                    border-radius: 6px 6px 0 0;
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
                    height: 56.3vh;
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

                
                
                `}
            </style>
            <div className='table'>
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
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>Standard User</td>
                            <td>
                            <FiEye className='icon'
                                onClick={handleViewClick}
                            />
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>Standard User</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>Standard User</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td> Jeffery  </td>
                            <td>palaceandchariots@gmail.com</td>
                            <td>System Admin</td>
                            <td>
                            <FiEye className='icon'/>
                            <BiEditAlt className='icon'/>
                            <RiDeleteBin6Line className='icon'/>
                            </td>
                        </tr>
                        
                        
                        
                        
                        </tbody>
                    </table>
                </div>
        </div>
        
        </div>
    </div>
  )
}

export default UserMgt;