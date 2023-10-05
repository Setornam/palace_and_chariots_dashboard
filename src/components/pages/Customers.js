import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../auth/firebase';

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const rowsPerPage = 11;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const querySnapshot = await getDocs(usersCollection);
        const userData = querySnapshot.docs.map((doc) => doc.data());
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(users.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const userEmail = user.email_address.toLowerCase();

    // Check if any of the fields match the search query
    return (
      fullName.includes(searchQuery) ||
      userEmail.includes(searchQuery)
    );
  });

  // Slice the filtered users for the current page
  const pageUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div>
      <div className='customers-container'>
        <div className='top-bar'>
          <div className='heading-container'>
            <h1>Customers</h1>
          </div>
          <div className='search-container'>
            <div className='search-box'>
              <div className='search-icon'>
                <FiSearch size={18} color='#8B8B8B' />
              </div>
              <input
                type='text'
                placeholder='Search...'
                className='search-input'
                value={searchQuery}
                onChange={handleSearchInputChange} // Handle input change
              />
            </div>
          </div>
        </div>
        <div className='table'>
          <h3>All Customers</h3>
        </div>
        <table className='active-requests-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>City</th>
              <th>Email Address</th>
            </tr>
            <div className='row-line'></div>
          </thead>
          <tbody>
            {pageUsers.map((user) => (
              <tr key={user.id}>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                {/* Include other user data fields here */}
                <td>{user.country}</td>
                <td>{user.city}</td>
                <td>{user.email_address}</td>
                <td>
                  <FiChevronRight className='icon' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pagination'>
          <FaArrowLeft
            className='button'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          <span>Page {currentPage}</span>
          <FaArrowRight
            className='button'
            disabled={currentPage === Math.ceil(filteredUsers.length / rowsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>
      </div>

      <style jsx>
                {`
                .customers-container{
                    display: block;
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
                }

                .heading-container h1{
                    font-size: 24px;
                    color: #595959;
                    font-weight: 600;
                    padding-top: 2.3vh;                    
                }

                .search-container{
                    display:flex;
                    justify-content: end;
                    width: 100%;
                    padding-right: 2.34vw;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 19.296875vw;
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

                .table {
                    height: 4.95vh;
                    width: 73.44vw;
                    background-color: #0B41AA;
                    display: flex;
                    padding-left: 3.9vw;
                }

                .table h3{
                    color: white;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: 700;
                }

                .active-requests-table{
                width: 77.3vw;
                height: 56.33vh;
                position: relative;
                top: 4.6vh;
                border-bottom: 1px solid #CDCDCD ;
                padding-bottom: 3.456vh;
            }

            .active-requests-table th{
                color: #595959;
                font-size: 14px;
                font-weight: 600;
                text-align: left;
                width: 30%;
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

            .row-line {
                border-bottom: 1px solid #EBEBEB;
                position: absolute;
                left: -1px;
                margin-top: 0.3456vh;
                width: 77.34vw;
            }

            

            .icon{
                font-size: 16px ;
                position: relative;
                top: 0.23vh;
                padding-left: 0.78vw;
                color: #CDCDCD;
                ;
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
                    
                
                `}
            </style>
    </div>
  );
};

export default Customers;
