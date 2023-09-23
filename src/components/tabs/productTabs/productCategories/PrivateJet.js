import React from 'react'

const PrivateJet = () => {


    const handleImageUpload = (e) => {
        const selectedImages = e.target.files;
        // Process the selected images here, e.g., upload them to a server or store them in state
      };



  return (
    <div>
      {/* Fields for Private Jet */}
      <h2>Performance</h2>
      <div className='add-fields'>
        <div className='private-jet-left-column'>
          <label htmlFor='maxRange'>Max Range</label>
          <input
            type='text'
            id='maxRange'
          />
  
          <label htmlFor='maxSpeed'>Max Speed</label>
          <input
            type='text'
            id='maxSpeed'
          />
  
          <label htmlFor='maxAltitude'>Max Altitude</label>
          <input
            type='text'
            id='maxAltitude'
          />
  
          <label htmlFor='passengers'>Passengers</label>
          <input
            type='text'
            id='passengers'
          />

          <label htmlFor='cabinHeight'>Cabin Height</label>
          <input
            type='text'
            id='cabinHeight'
          />

          <label htmlFor='cabinWidth'>Cabin Width</label>
          <input
            type='text'
            id='cabinWidth'
          />

          <label htmlFor='cabinLength'>Cabin Length</label>
          <input
            type='text'
            id='cabinLength'
          />

          <label htmlFor='baggageCapacity'>Baggage Capacity</label>
          <input
            type='text'
            id='baggageCapacity'
          />

          <div style={{display: 'flex'}}>
            <div>
            <label htmlFor='pricePerDay'>Price (per day)</label>
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

            <div style={{display:'flex'}}>
                <div >
                    <label htmlFor='freeCancellation'>Free Cancellation</label>
                    <select
                    id='freeCancellation'
                    style={{width: '250px', marginRight: '20px'}}
                    >
                    <option value=''>Select free cancellation</option>
                    <option value='24 hours'>24 hours</option>
                    <option value='48 hours'>48 hours</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='color'>Color</label>
                    <input
                    style={{width: '230px'}}
                    type='text'
                    id='color'
                    
                    />
                </div>
            </div>

            <label htmlFor='quantity'>Quantity</label>
            <input
            style={{width: '230px', marginRight: '20px'}}
            type='number'
            id='quantity'
            min='1'
            max='10000'
        />
        </div>
       
        <div className='add-right-column' style={{width:'230px', position:'relative', left:'-22px'}}>
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

export default PrivateJet