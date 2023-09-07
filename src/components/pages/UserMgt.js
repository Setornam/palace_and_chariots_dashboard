import React from 'react'
import {  FiSearch, FiPlusSquare, FiEye } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';

const UserMgt = () => {
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
                        <FiPlusSquare size={32} color='#071EC3'/>
                    </span>
                    
                </div>
                

            <style jsx>
                {`
                .customers-container{
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
                    height: 100px;
                    width: 100%;
                    border-radius: 6px 6px 0 0;
                }
                
                .heading-container{
                    width: 50%;
                    padding-left: 50px;
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
                    padding-top: 20px;                    
                }

                .search-container{
                    display:flex;
                    flex: 2;
                    justify-content: center;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 514px;
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
                width: 990px;
                height: 489px;
                position: relative;
                top: 40px;
                border-bottom: 1px solid #CDCDCD ;
                padding-bottom: 30px;
            }

            .active-requests-table th{
                color: #595959;
                font-size: 14px;
                font-weight: 600;
                text-align: left;
                padding: 0 20px 0 50px;
                position: relative;
                top: -15px;
            
            }

            .active-requests-table td{
                color: #595959;
                font-size: 14px;
                font-weight: 400;
                padding: 26px 20px 0 50px;
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