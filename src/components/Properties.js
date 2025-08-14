import React from 'react';
import { FaDollarSign, FaRulerCombined, FaBed, FaBath, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import Layout from './Layout';

const properties = [
  {
    id: 2,
    title: "Modern Family House",
    propertyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS-nS14Fm9zhEQegRDRIkYUlhivdaJDNUeg&s",
    city: "Springfield",
    state: "IL",
    price: 350000,
    size: 2200,
    rooms: 4,
    bathrooms: 3,
    status: "Available"
  },
  {
    id: 3,
    title: "Downtown Apartment",
    propertyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRne1ckHipEPT4YqIzFtODnrVSNyuEUbpv2Ag&s",
    city: "Chicago",
    state: "IL",
    price: 450000,
    size: 1200,
    rooms: 2,
    bathrooms: 2,
    status: "Sold"
  },
  {
    id: 4,
    title: "Suburban Condo",
    propertyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtmQJkmEiWSV1nrIH1dStAZm8MR6zzjGnsw&s",
    city: "Naperville",
    state: "IL",
    price: 280000,
    size: 1500,
    rooms: 3,
    bathrooms: 2,
    status: "Pending"
  },
  {
    id: 5,
    title: "Luxury Villa",
    propertyImage: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
    city: "Malibu",
    state: "CA",
    price: 2250000,
    size: 5000,
    rooms: 6,
    bathrooms: 5,
    status: "Available"
  },
  {
    id: 6,
    title: "Cozy Cottage",
    propertyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Z_pHZ1k_xxU0v8gQI1WVsManDHr5UmYGdA&s",
    city: "Lake Geneva",
    state: "WI",
    price: 180000,
    size: 950,
    rooms: 2,
    bathrooms: 1,
    status: "Available"
  }
];

const PropertyList = () => {
  return (
    <Layout style={{ backgroundColor: '#e6e6e6ff', minHeight: '100vh', paddingTop: '40px' }}>
      <div className="container">
        {/* <h2 className="mb-3" style={{ color: '#6f42c1' }}>PROPERTIES</h2> */}
        <div className="row">
          {properties.map((property) => (
            <div className="col-md-6 col-lg-4 mb-4" key={property.id}>
              <div className="card h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#f7f7f7ff',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <img
                  src={property.propertyImage}
                  className="card-img-top"
                  alt={property.title}
                  style={{
                    height: '170px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px'
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#5a4d9d' }}>{property.title}</h5>
                  <p className="text-muted mb-3">
                    <FaMapMarkerAlt className="me-2" />{property.city}, {property.state}
                  </p>
                  <ul className="list-unstyled small">
                    <li><FaDollarSign className="me-2" /><strong>Price:</strong> ${property.price.toLocaleString()}</li>
                    <li><FaRulerCombined className="me-2" /><strong>Size:</strong> {property.size} sq ft</li>
                    <li><FaBed className="me-2" /><strong>Rooms:</strong> {property.rooms}</li>
                    <li><FaBath className="me-2" /><strong>Bathrooms:</strong> {property.bathrooms}</li>
                    <li><FaTag className="me-2" /><strong>Status:</strong> {property.status}</li>
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-0 text-end">
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#664a8dff',
                      color: '#fff',
                      fontWeight: 'bold',
                      borderRadius: '8px'
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PropertyList;
