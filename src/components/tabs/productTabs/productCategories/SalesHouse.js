import React, { useState } from 'react';

const SalesHouse = () => {
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
      {/* Fields for Sales House */}
      <h2>Features</h2>
      <div className='add-fields'>
        <div className='add-left-column'>
          <label htmlFor='condition'>Condition</label>
          <input type='text' id='condition' />
  
          <label htmlFor='furnishing'>Furnishing</label>
          <input type='text' id='furnishing' />
  
          <label htmlFor='bedrooms'>Bedrooms</label>
          <input type='text' id='bedrooms' />
        </div>
        <div className='add-middle-column'>
          <label htmlFor='propertySize'>Property Size</label>
          <input type='text' id='propertySize' />
  
          <label htmlFor='outHouse'>Out House</label>
          <input type='text' id='outHouse' />
  
          <label htmlFor='bathRooms'>Bath Rooms</label>
          <input type='text' id='bathRooms' />
        </div>
        <div className='add-right-column'>
          <label>Images</label>
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
      <div style={{ marginTop: '80px' }}>
        <h2>Other Facilities</h2>
        <div className='checkboxes'>
          <label>
            <input
              type="checkbox"
              name="diningArea"
              checked={checkboxes.diningArea}
              onChange={handleCheckboxChange}
            />{' '}
            Dining Area
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="kitchenCabinets"
              checked={checkboxes.kitchenCabinets}
              onChange={handleCheckboxChange}
            />{' '}
            Kitchen Cabinets
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="airConditioning"
              checked={checkboxes.airConditioning}
              onChange={handleCheckboxChange}
            />{' '}
            Air Conditioning
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="hotWater"
              checked={checkboxes.hotWater}
              onChange={handleCheckboxChange}
            />{' '}
            Hot Water
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="security"
              checked={checkboxes.security}
              onChange={handleCheckboxChange}
            />{' '}
            24 Hrs Security
          </label>
    </div>
      </div>

  
    </div>
  );
};

export default SalesHouse;
