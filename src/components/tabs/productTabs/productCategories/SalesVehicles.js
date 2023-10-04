import React from 'react';

const SalesVehicles = ({
  model,
  setModel,
  condition,
  setCondition,
  seats,
  setSeats,
  horsePower,
  setHorsePower,
  interiorColor,
  setInteriorColor,
  mileage,
  setMileage,
  price,
  setPrice,
  quantity,
  setQuantity,
  make,
  setMake,
  color,
  setColor,
  yearOfManufacture,
  setYearOfManufacture,
  engineSize,
  setEngineSize,
  transmission,
  setTransmission,
  discount,
  setDiscount,
}) => {
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
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
  
          <label htmlFor='condition'>Condition</label>
          <input
            type='text'
            id='condition'
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />

          <label htmlFor='seats'>Seats</label>
          <input
            type='number'
            id='seats'
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
  
          <label htmlFor='horsePower'>Horse Power</label>
          <input
            type='text'
            id='horsePower'
            value={horsePower}
            onChange={(e) => setHorsePower(e.target.value)}
          />
  
          <label htmlFor='interiorColor'>Interior Color</label>
          <input
            type='text'
            id='interiorColor'
            value={interiorColor}
            onChange={(e) => setInteriorColor(e.target.value)}
          />

          <label htmlFor='mileage'>Mileage</label>
          <input
            type='text'
            id='mileage'
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />

          <label htmlFor='mileage'>Price</label>
          <input
            type='text'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

            <label htmlFor='quantity'>Quantity</label>
            <input
            type='number'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min='1'
            max='10000'
        />
        </div>
        <div className='add-middle-column'>
        <label htmlFor='make'>Make</label>
          <input
            type='text'
            id='brand'
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
          <label htmlFor='color'>Color</label>
          <input
            type='text'
            id='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor='yearOfManufacture'>Year of Manufacture</label>
          <input
            type='text'
            id='yearOfManufacture'
            value={yearOfManufacture}
            onChange={(e) => setYearOfManufacture(e.target.value)}
          />
          <label htmlFor='engineSize'>Engine Size</label>
          <input
            type='text'
            id='engineSize'
            value={engineSize}
            onChange={(e) => setEngineSize(e.target.value)}
          />
          <label htmlFor='transmission'>Transmission</label>
          <input
            type='text'
            id='transmission'
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          />
          <label htmlFor='discount'>Discount</label>
          <input
            type='text'
            id='discount'
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
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