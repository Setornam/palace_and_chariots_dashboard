import React from 'react';

const generateRandomData = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Kate'];
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'India'];
  const cities = ['New York', 'Toronto', 'London', 'Sydney', 'Berlin', 'Paris', 'Tokyo', 'Beijing', 'Rio de Janeiro', 'Mumbai'];
  const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eve@example.com', 'frank@example.com', 'grace@example.com', 'henry@example.com', 'ivy@example.com', 'jack@example.com', 'kate@example.com'];

  const randomCustomers = [];
  for (let i = 0; i < 11; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];

    randomCustomers.push({
      name: randomName,
      country: randomCountry,
      city: randomCity,
      email: randomEmail,
    });
  }

  return randomCustomers;
};

const CustomersTabContent = () => {
  const customers = generateRandomData();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>City</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.name}</td>
            <td>{customer.country}</td>
            <td>{customer.city}</td>
            <td>{customer.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomersTabContent;
