import './Profile.css';
import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';


function ProfilePage() {
    const [formData, setFormData] = useState({
      companyName: '',
      bio: '',
      website: '',
      fundingAmount: '',
      equityOffered: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send formData to the backend (you will need to implement this part)
      fetch('/save_profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        // Handle response from the backend (if needed)
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
  
    return (
      <div>
        <h1>Startup Profile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="bio">Short Bio:</label><br />
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          ></textarea><br /><br />
  
          <label htmlFor="website">Company Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="fundingAmount">Funding Amount (USD):</label>
          <input
            type="number"
            id="fundingAmount"
            name="fundingAmount"
            value={formData.fundingAmount}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="equityOffered">Equity Offered (%):</label>
          <input
            type="number"
            id="equityOffered"
            name="equityOffered"
            value={formData.equityOffered}
            onChange={handleChange}
            required
          /><br /><br />
  
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
  
  export default ProfilePage;