import './Profile.css';
import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';


function ProfilePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    bio: '',
    website: '',
    fundingAmount: '',
    equityOffered: '',
    companyImage: null // Added for company image
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle number input to prevent negative values
    if (type === 'number' && value < 0) {
      return;
    }
    if (name === 'equityOffered' && value > 100) {
      return;
    }


    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, companyImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData to the backend (you will need to implement this part)
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    fetch('/save_profile', {
      method: 'POST',
      body: formDataToSend
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
      <div className='Wrapper'>
        <h1 className='form-gap'>Profile</h1>
        <div className='forms'>
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

            <label htmlFor="companyImage">Company Image:</label>
            <input
              type="file"
              id="companyImage"
              name="companyImage"
              accept="image/*"
              onChange={handleImageChange}
              required
            /><br /><br />
    
            <input className = "submit-button" type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
  
  export default ProfilePage;