import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactCard.css';

const ContactCard = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        setContactData(response.data.results[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="contact-card">
      <h2>Contact Card                   </h2> {}
      <h2></h2>
      <img className="user-img" src={contactData.picture.large} alt="User" />
      <h3></h3>
      <div className="contact-info">
        <div className="left-column">
          <p className="title">Title: <span>{contactData.name.title}</span></p>
          <p className="first-name">First Name: <span>{contactData.name.first}</span></p>
          <p className="last-name">Last Name: <span>{contactData.name.last}</span></p>
        </div>
        <div className="right-column">
          <p className="phone">Phone: <span>{contactData.phone}</span></p>
          <p className="email">Email: <span>{contactData.email}</span></p>
          <p className="age">Age: <span>{contactData.dob.age}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
