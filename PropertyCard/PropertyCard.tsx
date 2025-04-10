import React from 'react';
import './PropertyCard.css';
import rectangleImage from '../../assets/rectangle-4135.svg';
import image4 from '../../assets/image-4.svg';
import image5 from '../../assets/image-5.svg';
import image6 from '../../assets/image-6.svg';
import image7 from '../../assets/image-7.svg';
import image8 from '../../assets/image-8.svg';
import image9 from '../../assets/image-9.svg';
import mainImage from '../../assets/image.svg'; 

const PropertyCard: React.FC = () => {
  return (
    <div className="property-card">
      <div className="left-section">
        <img className="property-image" src={mainImage} alt="Property" /> 
      </div>
      <div className="right-section">
        <div className="property-title-section">
          <h2>Property 1</h2>
          <p>Property code: 2932bjhuj</p>
          <div className="check-section">
            <p>
              Check in: <span className="check-date">12 Jan 2025</span>
            </p>
            <p>
              Check out: <span className="check-date">12 Jan 2025</span>
            </p>
          </div>
        </div>
        <div className="property-details">
          <div className="property-header">
            <h2 className="property-title">Property 1</h2>
            <span className="property-code">Property code: 2932bjhuj</span>
          </div>
          <div className="property-dates">
            <span className="date-label">Check in:</span>
            <span className="date-value">12 Jan 2025</span>
            <span className="date-label">Check out:</span>
            <span className="date-value">12 Jan 2025</span>
          </div>
          <div className="property-icons">
            <div className="icon-group">
              <img src={image4} alt="Bedrooms" className="icon" />
              <div className="icon-text">
                <span className="icon-title">Bedrooms</span>
                <span className="icon-value">12</span>
              </div>
            </div>
            <div className="icon-group">
              <img src={image5} alt="Nights" className="icon" />
              <div className="icon-text">
                <span className="icon-title">Nights</span>
                <span className="icon-value">12</span>
              </div>
            </div>
            <div className="icon-group">
              <img src={image6} alt="Adults" className="icon" />
              <div className="icon-text">
                <span className="icon-title">Adults</span>
                <span className="icon-value">12</span>
              </div>
            </div>
            <div className="icon-group">
              <img src={image7} alt="Children" className="icon" />
              <div className="icon-text">
                <span className="icon-title">Children</span>
                <span className="icon-value">12</span>
              </div>
            </div>
            <div className="icon-group">
              <img src={image8} alt="Parking" className="icon" />
              <div className="icon-text">
                <span className="icon-title">Parking</span>
                <span className="icon-value">12</span>
              </div>
            </div>
            <div className="icon-group">
              <img src={image9} alt="Pets" className="icon" />
              <div className="icon-text">
                <span className="icon-title">Pets</span>
                <span className="icon-value">12</span>
              </div>
            </div>
          </div>
          <div className="property-footer">
            <div className="property-price">USD 1000</div>
            <button className="select-button">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
