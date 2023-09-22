import React from 'react'

const SalesVehicles = () => {

    const handleImageUpload = (e) => {
        const selectedImages = e.target.files;
        // Process the selected images here, e.g., upload them to a server or store them in state
      };


  return (
    <div>
      {/* Fields for Sales Vehicle */}
      <h2>Features</h2>
      <div className='add-fields'>
        <div className='add-left-column'>
          <label htmlFor='model'>Model</label>
          <input
            type='text'
            id='model'
          />
  
          <label htmlFor='condition'>Condition</label>
          <input
            type='text'
            id='condition'
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

          <label htmlFor='mileage'>Mileage</label>
          <input
            type='text'
            id='mileage'
            
          />

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

export default SalesVehicles