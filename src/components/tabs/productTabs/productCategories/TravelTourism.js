import React, { useState } from 'react';

const TravelTourism = () => {

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
      <h2 >Description</h2>
      <div className='add-fields'>
        <div className='private-jet-left-column'>
          <label htmlFor='description' style={{marginTop: '-20px'}}> </label>
          <textarea name='description' className='description'></textarea>

          <div style={{display: 'flex'}}>
            <div>
            <label htmlFor='pricePerDay'>Package Price</label>
            <input
                style={{ width: '230px', marginRight: '20px' }}
                type='text'
                id='pricePerDay'
                required
            />
            </div>

            <div>
            <label htmlFor='discount'>Discount</label>
            <input
                style={{ width: '230px'}}
                type='text'
                id='discount'
                required
            />
            </div>
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
  
    </div>
  )
}

export default TravelTourism