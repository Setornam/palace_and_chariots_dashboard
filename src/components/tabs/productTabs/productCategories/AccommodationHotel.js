import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; 
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../auth/firebase';
import { storage } from '../../../auth/firebase'; // Make sure to use the correct path
import ImageGallery from '../ImageGallery'; // Import the ImageGallery component
import Dropzone from 'react-dropzone'; // Import the Dropzone component
import Gallery from 'react-image-gallery'; // Import the Gallery component
import 'react-image-gallery/styles/css/image-gallery.css';



const AccommodationHotel = ({ additionalFields, onAdditionalFieldsChange }) => {

  const selectedFacilities = [];


  const [hotelImages, setHotelImages] = useState([]); // Separate state for hotel images
  const [roomImages, setRoomImages] = useState([]);


  const handleHotelImageUpload = async (acceptedFiles) => {
    const newHotelImages = await handleImageUpload(acceptedFiles);
    setHotelImages([...hotelImages, ...newHotelImages]);
  };

  const handleRoomImageUpload = async (acceptedFiles) => {
    const newRoomImages = await handleImageUpload(acceptedFiles);
    setRoomImages([...roomImages, ...newRoomImages]);
  };

  
  const handleImageUpload = async (acceptedFiles) => {
    const newImages = [];

    for (const imageFile of acceptedFiles) {
      const filename = Date.now() + '_' + imageFile.name;
      const storageRef = ref(storage, 'images/' + filename);

      try {
        await uploadBytes(storageRef, imageFile);
        const imageUrl = await getDownloadURL(storageRef);
        newImages.push({ original: imageUrl, thumbnail: imageUrl });
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    return newImages;
  };


 

    
  
 
      

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
    <div>
      {/* Fields for Hotel Facilities */}
      <h2>Hotel Facilities</h2>
      <div className='add-fields'>
        <div className='add-left-column'>
            <div className='checkboxes'>
                <label>
                    <input
                    type="checkbox"
                    name="swimmingPool"
                    checked={checkboxes.swimmingPool}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Swimming Pool
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="privateParking"
                    checked={checkboxes.privateParking}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Private Parking
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="freeWifi"
                    checked={checkboxes.freeWifi}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Free Wifi
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="disabledGuests"
                    checked={checkboxes.disabledGuests}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Facilities for disabled guests
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="freeWifiInAllAreas"
                    checked={checkboxes.freeWifiInAllAreas}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Free Wifi in all areas
                </label>
            </div>
        </div>
        <div className='add-middle-column'>
            <div className='checkboxes'>
                <label>
                    <input
                    type="checkbox"
                    name="familyRooms"
                    checked={checkboxes.familyRooms}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Family Rooms
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="spaAndWellness"
                    checked={checkboxes.spaAndWellness}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Spa and Wellness Center
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="airportShuttle"
                    checked={checkboxes.airportShuttle}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Airport Shuttle
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="freeParking"
                    checked={checkboxes.freeParking}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Free Parking
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="security"
                    checked={checkboxes.security}
                    onChange={handleCheckboxChange}
                    />{' '}
                    24/7 Security
                </label>
                <br />
                
            </div>
        </div>
        <div className='add-right-column'>
            <label >Images</label>
            <div className='file-input-outer-container'>
                <div className='file-input-container'>
                <Dropzone
                  onDrop={handleHotelImageUpload}
                  accept='image/*'
                  multiple
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className='file-input-outer-container '>
                      <input {...getInputProps()} className='custom-file-input' />
                      <label className='custom-file-label'>
                        Click to add Hotel Images
                      </label>
                    </div>
                  )}
        </Dropzone>
                     {/* Display uploaded hotel images using the Gallery component */}
        <div className='image-preview'>{hotelImages.length > 0 && <Gallery
          items={hotelImages}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />}</div>
                </div>
            </div>
            
        </div>
      </div>
      <div className='border'> </div>
      <div>
      
      <h2>Rooms</h2>
      <div className='add-fields'>
        <div className='add-left-column'>
          <label htmlFor='roomType'>Room Type</label>
          <input
            type='text'
            id='roomType'
            required
          />

          <h2>Occupancy</h2>
  
          <label htmlFor='adultsOccupancy'>Adults</label>
          <input
            type='number'
            id='adultsOccupancy'
            min='0'
            max='10000'
            style={{width: '100px'}}
          />

          <label htmlFor='childrenOccupancy'>Children</label>
          <input
            type='number'
            id='childrenOccupancy'
            min='0'
            max='10000'
            style={{width: '100px'}}
          />
  
          <label htmlFor='hotelDiscount'>Discount</label>
          <input
            type='text'
            id='hotelDiscount'
          />

            <div className='checkboxes'>
                <label>
                    <input
                    type="checkbox"
                    name="kingSizeBed"
                    checked={checkboxes.kingSizeBed}
                    onChange={handleCheckboxChange}
                    />{' '}
                    King Size Bed
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="queenSizeBed"
                    checked={checkboxes.queenSizeBed}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Queen Size Bed
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="singleBed"
                    checked={checkboxes.singleBed}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Single Bed
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="doubleBed"
                    checked={checkboxes.doubleBed}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Double Bed
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="breakfastAvailable"
                    checked={checkboxes.breakfastAvailable}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Breakfast Available
                </label>
                <br />

                <label>
                    <input
                    type="checkbox"
                    name="airCondition"
                    checked={checkboxes.airCondition}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Air Condition
                </label>
                <br />

                <label>
                    <input
                    type="checkbox"
                    name="freeToiletries"
                    checked={checkboxes.freeToiletries}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Free Toiletries
                </label>
                <br />

                <label>
                    <input
                    type="checkbox"
                    name="miniBar"
                    checked={checkboxes.miniBar}
                    onChange={handleCheckboxChange}
                    />{' '}
                    Complimentary Minibar
                </label>
                <br />
            </div>

          
  
          
        </div>
        <div className='add-middle-column'>
        <label htmlFor='hotelPrice'>Price</label>
          <input
            type='text'
            id='hotelPrice'
          />
          
        
        </div>
        <div className='add-right-column'>
            <label >Room Images</label>
            <div className='file-input-outer-container'>
                <div className='file-input-container'>
                <Dropzone
                  onDrop={handleRoomImageUpload}
                  accept='image/*'
                  multiple
                >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()} className='file-input-outer-container'>
                        <input {...getInputProps()} className='custom-file-input' />
                        <label className='custom-file-label'>
                          Click to add Room Images
                        </label>
                      </div>
                    )}
              </Dropzone>
                      <div className='image-preview'>
                        {/* Display uploaded room images using the Gallery component */}
        {roomImages.length > 0 && <Gallery
          items={roomImages}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />}
                      </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
  
}

export default AccommodationHotel