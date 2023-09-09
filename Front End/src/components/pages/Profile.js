import './Profile.css';
import { Outlet, Link } from 'react-router-dom';
import {addCompanyProfile} from "./firebase.js"
import React, { useState } from 'react';



function ProfilePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    bio: '',
    website: '',
    fundingAmount: '',
    equityOffered: '',
    Location: '',
    companyImage: null, // Added for company image
    tags: []
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

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    const updatedTags = checked
      ? [...formData.tags, value]
      : formData.tags.filter(tag => tag !== value);

    setFormData({ ...formData, tags: updatedTags });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData to the backend (you will need to implement this part)
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    addCompanyProfile(formData.companyName, formData.bio, formData.website, formData.fundingAmount, formData.equityOffered, formData.Location, formData.companyImage, formData.tags);

    
    
  };
  
    return (
      <div className='Wrapper'>
        <h1 className='form-gap'>Profile</h1>
        <div className='forms'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="companyName">Company Name: </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            /><br /><br />

            <label htmlFor="bio">Short Bio: </label><br />
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
            ></textarea><br /><br />

            <label htmlFor="Location">Location: </label>
            <input
              type="text"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              required
            /><br /><br />

            <label htmlFor="website">Company Website Link: </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            /><br /><br />
    
            <label htmlFor="fundingAmount">Funding Amount (USD): </label>
            <input
              type="number"
              id="fundingAmount"
              name="fundingAmount"
              value={formData.fundingAmount}
              onChange={handleChange}
              required
            /><br /><br />
    
            <label htmlFor="equityOffered">Equity Offered (%): </label>
            <input
              type="number"
              id="equityOffered"
              name="equityOffered"
              value={formData.equityOffered}
              onChange={handleChange}
              required
            /><br /><br />

            <label htmlFor="companyImage">Company Image: </label>
            <input
              type="file"
              id="companyImage"
              name="companyImage"
              accept="image/*"
              onChange={handleImageChange}
              required
            /><br /><br />

      <label>Company Tags:</label><br />
        <label>
          <input
            type="checkbox"
            name="tags"
            value="tech"
            checked={formData.tags.includes('tech')}
            onChange={handleTagChange}
          />
           Tech
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tags"
            value="medicine"
            checked={formData.tags.includes('medicine')}
            onChange={handleTagChange}
          />
           Medicine
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tags"
            value="finance"
            checked={formData.tags.includes('finance')}
            onChange={handleTagChange}
          />
           Finance
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tags"
            value="engineering"
            checked={formData.tags.includes('engineering')}
            onChange={handleTagChange}
          />
           Engineering
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tags"
            value="other"
            checked={formData.tags.includes('other')}
            onChange={handleTagChange}
          />
           Other
        </label><br /><br />

    
            <input className = "submit-button" type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
  
  export default ProfilePage;