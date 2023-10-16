import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FaRegWindowClose } from 'react-icons/fa';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../auth/firebase';
import Dropzone from 'react-dropzone';
import Gallery from 'react-image-gallery';



const ViewProductsTab1 = ({ 
    
    product,
    onClose,
    tabContainerClassName,
    topBarClassName,
    formContainerClassName,

}) => {


  const [hotelImages, setHotelImages] = useState([]); // Separate state for hotel images
  const [roomImages, setRoomImages] = useState([]);


  const [checkboxes, setCheckboxes] = useState({
    swimmingPool: false,
    privateParking: false,
    freeWifi: false,
    disabledGuests: false,
    freeWifiInAllAreas: false,
    familyRooms: false,
    spaAndWellness: false,
    airportShuttle: false,
    freeParking: false,
    security: false,

  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };


  return (
    <div className={tabContainerClassName}>
        <div className={topBarClassName}>
        <h4>View</h4>
        <span className='close-icon' onClick={onClose}>
            <FaRegWindowClose className="back-icon"  onClick={onClose}/>
        </span>
      </div>
      <div className={formContainerClassName}>
      <form >
          <div className='first-row'>
            <div className='first-column'>
              <label htmlFor='productName'>Product Name</label>
              <input
                type='text'
                id='productName'
                value={product.name}
                required
              />
            </div>

            <div className='second-column'>
              <label htmlFor='status'>Status</label>
              <select
                id="status"
                value={product.product_status ? product.product_status : "N/A"}
              >
                <option value="" >
                  {product.product_status ? product.product_status : "N/A"}
                </option>
                
              </select>
            </div>
          </div>

          <div>
            <label htmlFor='selectedService'>Service</label>
            <select
                id="status"
                value={product.service ? product.service : "N/A"}
              >
                <option value="" >
                  {product.service ? product.service : "N/A"}
                </option>
                
              </select>
          </div>

          <div className='last-row'>
            <div>
              <label htmlFor='selectedCategory'>Category</label>
              <select
                id="status"
                value={product.category ? product.category : "N/A"}
              >
                <option value="" >
                  {product.category ? product.category : "N/A"}
                </option>
                
              </select>
            </div>

            <div style={{ marginLeft: 20 }}>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                id='location'
                value={product.location}
                
              />
            </div>

            
          </div>
          <div className='border'> </div>

          <div>
          <div>
      {/* Fields for Vehicle Saloon */}
      <h2>Features</h2>
      <div className='add-fields'>
        <div className='add-left-column'>
          <label htmlFor='model'>Model</label>
          <input
            type='text'
            id='model'
          />
  
          <label htmlFor='seats'>Seats</label>
          <input
            type='text'
            id='seats'
          />
  
          <label htmlFor='horsePower'>Horse Power</label>
          <input
            type='text'
            id='horsePower'
          />
  
          <label htmlFor='interiorColor'>Interior Color</label>
          <input
            type='text'
            id='interiorColor'
          />

          <label htmlFor='pricePerDay'>Price (per day)</label>
          <input
            type='text'
            id='pricePerDay'
            required
          />

            <label htmlFor='freeCancellation'>Free Cancellation</label>
            <select
            id='freeCancellation'
            >
            <option value=''>Select free cancellation</option>
            <option value='24 hours'>24 hours</option>
            <option value='48 hours'>48 hours</option>
            </select>

            <label htmlFor='quantity'>Quantity</label>
            <input
            type='number'
            id='quantity'
            min='1'
            max='10000'
        />
        </div>
        <div className='add-middle-column'>
        <label htmlFor='make'>Make</label>
          <input
            type='text'
            id='make'
          />
          <label htmlFor='color'>Color</label>
          <input
            type='text'
            id='color'
          />
          <label htmlFor='yearOfManufacture'>Year of Manufacture</label>
          <input
            type='text'
            id='yearOfManufacture'
          />
          <label htmlFor='engineSize'>Engine Size</label>
          <input
            type='text'
            id='engineSize'
          />
          <label htmlFor='transmission'>Transmission</label>
          <input
            type='text'
            id='transmission'
          />
          <label htmlFor='discount'>Discount</label>
          <input
            type='text'
            id='discount'
          />

    

          <label htmlFor='numberOfBags'>Number of Bags</label>
          <input
            type='text'
            id='numberOfBags'
          />
        </div>
        <div className='add-right-column'>
            <label >Images</label>
            <div className='file-input-outer-container'>
                <div className='file-input-container'>
                    <input
                    type='file'
                    id='images'
                    accept='image/*'
                    multiple
                    className='custom-file-input'
                    />
                    <label htmlFor='images' className='custom-file-label'>
                    Click to add Images
                    </label>
                </div>
            </div>
        </div>
      </div>
    </div>
          </div>

          
          <div>
            <br/>
            <br/>
            <br/>
          </div>
        </form>
      </div>
      




      <style jsx >
        {`
          .back-icon{
            color: white;
            font-size: 24px;
            z-index: 10000000000000000000;
            cursor: pointer;
            position: absolute;
            left: 81.05vw;
            top: 1.1vh;
          }

          .tab{
            background-color: white;
            position: absolute;
            right: 0;
            z-index: 10000;
          }

          .close-icon{
            z-index: 10000000;
            cursor: pointer;
            width: 20px;
            height: 20px;
          }

          .success-message {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            text-align: center;
          }

        .first-row{
            display: flex;
        }

        .last-row{
            display: flex;
            width: 40.63vw;
        }

        .last-row select{
            width: 244px;
        }

        .last-row input{
            width: 244px;
        }

        .first-row select{
            width: 305px;
        }

        .first-column{
            flex: 1.5;
        }

        .second-column{
            flex: 1;
        }

        label{
            display: block;
            font-size: 14px;
            color: #595959;
            font-weight: 400;
            padding-bottom: 5px;
            padding-top: 25px;
        }

        input{
            width: 500px;
            font-size: 14px;
            padding: 0 10px;
            height: 38px;
            border: 1px solid #CDCDCD;
            border-radius: 5px;
            color: #595959;
        }

        select{
            width: 520px;
            font-size: 14px;
            color: #595959;
            padding: 10px 10px;
            height: 38px;
            border: 1px solid #CDCDCD;
            border-radius: 5px;
            
        }

        button{
            background-color: #071EC3;
            color: #FFFFFF;
            width: 244px;
            height: 38px;
            border: none;
            border-radius: 5px;
            margin-top: 40px;
        }

        .border{
            
            border-bottom: 1px solid #CDCDCD;
            width: 77.34vw;
            position: relative;
            left: -30px;
            margin-top: 40px;
        }

        h2{
            font-size: 20px;
            color: #595959;
            font-weight: 600;
        }

        .add-fields{
            display: flex;
        }

        .add-fields input{
            width: 230px;
            position: relative;
        }

        .add-left-column{
            width: 280px;
        }

        .add-left-column select{
            width: 250px;
            padding: 10px 5px;
        }

        .add-middle-column{
            width: 24.56vw;
        }

        .add-middle-column input{
            width: 240px;
            height: 37px;

        }


        button{
            cursor  : pointer;
        }
        
        #images {
              color: white;
              height:133px;
              width: 305px;
              
        }

        .file-input-outer-container{
            height: 133px;
            width: 305px;
            border-radius: 5px;
            border: solid 1px #CDCDCD;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .custom-file-input {
            display: none;
        }

        .custom-file-label {
            width: 267px;
            height: 101px;
            background-color: #CDCDCD;
            color: #595959;
            font-size: 12px;
            cursor: pointer;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 0px;
        }

        .custom-file-label:hover {
            background-color: grey;
            color: white;
        }

        .private-jet-left-column input{
            width:500px;
        }

        .private-jet-left-column{
            width: 50vw;
        }


        .checkboxes input{
            width: 14px;
            height: 14px;
            border: 1px solid #CDCDCD;
            border-radius: 3px;
            cursor: pointer;
        }

        .checkboxes label{
            font-size: 14px;
            font-weight: 400;
            color: #595959;
        }

        .description{
          width: 520px;
          height: 156px;
          background-color: #fff;
          border: 1px solid #CDCDCD;
          border-radius: 5px;
        
        }
        
        .add-right-column{
          position: relative;
          left: 1.875vw;
        }


        .image-preview{
          background-color: white;
          max-height: 325px;
          width: 300px;
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px;
          overflow: hidden;
          border-radius: 5px;
        }

        .image-gallery {
          max-width: 600px;
          margin: 0 auto;
        }

        .image-gallery-thumbnails {
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          border-radius: 5px;
        }

        .image-gallery-thumbnail {
          margin: 5px;
          cursor: pointer;
          width: 60px;
          height: 50px;
          border-radius: 5px;

        }

        .image-gallery-thumbnail.active {
          background-color: transparent;
          width: 60px;
          height: 50px;
          border-radius: 5px;

        }

        .image-gallery-fullscreen-button {
          position: absolute;
          right: -100px;
          top: -50px;
          display: none;
          }

          .image-gallery-left-nav{
            width: 10px;
            font-size: 12px;
            height: 10px;
            display: none;
          }

          .image-gallery-right-nav{
            display: none;
          }

          

        
        `}
      </style>
    
    </div>
  )
}

export default ViewProductsTab1