import React, { useState } from 'react';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [status, setStatus] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [location, setLocation] = useState('');

  const services = ['Rentals', 'Travel and Tour', 'Security', 'Sales'];
  const statusOptions = ['Active', 'Inactive', 'Pending'];
  const categories = ['Vehicles/Saloon', 'Accommodation', 'Bus'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form values here and perform actions like validation or submission to an API
    console.log('Product Name:', productName);
    console.log('Status:', status);
    console.log('Selected Service:', selectedService);
    console.log('Selected Category:', selectedCategory);
    console.log('Location:', location);
  };

  return (
    <div className='form-container'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='first-row'>
            <div className='first-column'>
              <label htmlFor='productName'>Product Name</label>
              <input
                type='text'
                id='productName'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>

            <div className='second-column'>
              <label htmlFor='status'>Status</label>
              <select
                id='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value='' disabled>
                  Select a status
                </option>
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor='selectedService'>Service</label>
            <select
              id='selectedService'
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value='' disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className='last-row'>
            <div>
              <label htmlFor='selectedCategory'>Category</label>
              <select
                id='selectedCategory'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value='' disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginLeft: 20 }}>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                id='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>

          <button type='submit'>Save</button>
        </form>
      </div>


    

    <style jsx>
        {`
        .form-container{
            padding: 20px 30px ;
        }

        .first-row{
            display: flex;
        }

        .last-row{
            display: flex;
            width: 520px;
        }

        .last-row select{
            width: 268px;
        }

        .last-row input{
            width: 208px;
        }

        .first-row select{
            width: 305px;
        }

        .first-column{
            flex: 2;
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
        
        `}
    </style>
    </div>
  )
}

export default CreateProduct