import React, { useState } from 'react';
import VehicleSaloon from './productCategories/VehicleSaloon';
import PrivateJet from './productCategories/PrivateJet';
import SalesVehicles from './productCategories/SalesVehicles';
import SalesHouse from './productCategories/SalesHouse';
import TravelTourism from './productCategories/TravelTourism';
import AccommodationHotel from './productCategories/AccommodationHotel';
import { addDoc, collection } from 'firebase/firestore'; 
import { db } from '../../auth/firebase'; 



  const handleImageUpload = (e) => {
    const selectedImages = e.target.files;
    // Process the selected images here, e.g., upload them to a server or store them in state
  };

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [status, setStatus] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [additionalFields, setAdditionalFields] = useState(null);
  const [location, setLocation] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [color, setColor] = useState('');
  const [seats, setSeats] = useState('');
  const [horsePower, setHorsePower] = useState('');
  const [interiorColor, setInteriorColor] = useState('');
  const [mileage, setMileage] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [transmission, setTransmission] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDiscount, setProductDiscount] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  
  

  const categoryOptions = {
    Rentals: ['Vehicles/Saloon', 'Vehicles/Bus', 'Vehicles/Private Jet', 'Accommodation/Hotels', 'Accommodation/Apartments'],
    'Travel and Tourism': ['Travel/Tourism'],
    Sales: ['Sales/Vehicles', 'Sales/House'],
  };

  // Handle service change
  const handleServiceChange = (service) => {
    setSelectedService(service);
    
    // Update available categories based on the selected service
    setSelectedCategory('');
    setAdditionalFields(null);
  };
  

  const services = ['Rentals', 'Travel and Tourism', 'Security', 'Sales'];
  const statusOptions = ['Available', 'Unavailable'];
  
   // Get available categories based on the selected service
   const availableCategories = categoryOptions[selectedService] || [];


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Set additional fields based on the selected category
    if (category === 'Vehicles/Saloon') {
      setAdditionalFields(<VehicleSaloon />);
    } else if (category === 'Vehicles/Private Jet') {
      setAdditionalFields(<PrivateJet />);
    } else if (category === 'Sales/Vehicles') {
      setAdditionalFields(<SalesVehicles />);
    } else if (category === 'Sales/House') {
      setAdditionalFields(<SalesHouse />);
    } else if (category === 'Travel/Tourism') {
      setAdditionalFields(<TravelTourism />);
    } else if (category === 'Accommodation/Hotels' || category === 'Accommodation/Apartments') {
      setAdditionalFields(<AccommodationHotel />);
    } else if (category === 'Vehicles/Bus' || category === 'Events Services') {
      setAdditionalFields(<VehicleSaloon />);
    } else {
      setAdditionalFields(null); // Reset additional fields for other categories
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the selected category is "Sales/Vehicles"
      if (selectedCategory === 'Sales/Vehicles') {
        // Create a new document in the "vehicles" collection
        const docRef = await addDoc(collection(db, 'vehicles'), {
          name: productName,
          service: selectedService,
          category: selectedCategory,
          price: productPrice,
          discount: productDiscount,
          quantity: productQuantity,
          product_status: status,
          location,
          model,
          brand,
          condition,
          color,
          seats,
          horse_power: horsePower,
          interior_color: interiorColor,
          mileage,
          year_of_manufacture: yearOfManufacture,
          engine_size: engineSize,
          transmission,
        });

        console.log('Document written with ID: ', docRef.id);
      }

        // Reset form fields after successful submission
        setProductName('');
        setStatus('');
        setSelectedService('');
        setSelectedCategory('');
        setProductPrice(''); 
        setProductDiscount(''); 
        setProductQuantity(''); 
        setLocation('');
        setModel('');
        setBrand('');
        setCondition('');
        setColor('');
        setSeats('');
        setHorsePower('');
        setInteriorColor('');
        setMileage('');
        setYearOfManufacture('');
        setEngineSize('');
        setTransmission('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
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
              onChange={(e) => handleServiceChange(e.target.value)}
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
                {availableCategories.map((category) => (
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
          <div className='border'> </div>

          {selectedCategory === 'Vehicles/Saloon' && <VehicleSaloon />}

          {selectedCategory === 'Vehicles/Private Jet' && <PrivateJet />}

          {selectedCategory === 'Sales/Vehicles' && <SalesVehicles />}

          {selectedCategory === 'Sales/House' && <SalesHouse />}

          {selectedCategory === 'Travel/Tourism' && <TravelTourism />}

          {selectedCategory === 'Accommodation/Hotels' && <AccommodationHotel />}

          {selectedCategory === 'Accommodation/Apartments' && <AccommodationHotel />}

          {selectedCategory === 'Events Services' && <TravelTourism />}

          {selectedCategory === 'Vehicles/Bus' && <VehicleSaloon />}


            {additionalFields && (
            <div>
                <label>Additional Fields</label>
                {additionalFields}
            </div>
          )}

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

        
        
        `}
    </style>
    </div>
  )
}

export default CreateProduct