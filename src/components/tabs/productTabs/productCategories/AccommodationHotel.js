import React, { useState } from 'react';

const AccommodationHotel = () => {


    const handleImageUpload = (e) => {
        const selectedImages = e.target.files;
        // Process the selected images here, e.g., upload them to a server or store them in state
      };
      

      const [checkboxes, setCheckboxes] = useState({
        diningArea: false,
        kitchenCabinets: false,
        airConditioning: false,
        hotWater: false,
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
      {/* Fields for Vehicle Saloon */}
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
                    name="freeWifieInAllAreas"
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
                
            </div>
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
                    onChange={handleImageUpload}
                    className='custom-file-input'
                    />
                    <label htmlFor='images' className='custom-file-label'>
                    Click to add Images
                    </label>
                </div>
            </div>
        </div>
      </div>
      <div className='border'> </div>
      <div>
      {/* Fields for Vehicle Saloon */}
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
                    <input
                    type='file'
                    id='images'
                    accept='image/*'
                    multiple
                    onChange={handleImageUpload}
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
  )
}

export default AccommodationHotel