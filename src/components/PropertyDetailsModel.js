import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaDollarSign, FaRulerCombined, FaBed, FaBath, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const PropertyDetailsModal = ({ show, onHide, property }) => {
  if (!property) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{property.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={property.propertyImage}
          alt={property.title}
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
        />
        <p><FaMapMarkerAlt /> {property.city}, {property.state}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><FaDollarSign /> <strong>Price:</strong> ${property.price.toLocaleString()}</li>
          <li><FaRulerCombined /> <strong>Size:</strong> {property.size} sq ft</li>
          <li><FaBed /> <strong>Rooms:</strong> {property.rooms}</li>
          <li><FaBath /> <strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><FaTag /> <strong>Status:</strong> {property.status}</li>
        </ul>
        <p>{property.description || "No description available."}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary">Contact Agent</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PropertyDetailsModal;
