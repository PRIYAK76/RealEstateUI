import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PropertyCard from "../components/PropertyCard";
import PropertyDetailsModal from "../components/PropertyDetailsModel";
import { getRequest } from "../api/apiService";
import { useNavigate } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getRequest("/Properties/getProperties");
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // const handleViewDetails = (property) => {
  //   setSelectedProperty(property);
  //   setModalShow(true);
  // };

  const handleViewDetails = (property) => {
    navigate(`/property/${property.id}`);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedProperty(null);
  };

  return (
    <Layout
      style={{
        backgroundColor: "#e6e6e6ff",
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      <div className="container">
        <div className="row">
          {properties.map((property) => (
            <div className="col-md-6 col-lg-4 mb-4" key={property.id}>
              <PropertyCard
                property={property}
                onViewDetails={() => handleViewDetails(property)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <PropertyDetailsModal 
        show={modalShow} 
        onHide={handleCloseModal} 
        property={selectedProperty} 
      /> */}
    </Layout>
  );
};

export default PropertyList;
