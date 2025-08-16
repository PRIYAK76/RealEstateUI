import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getRequest } from "../api/apiService";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getRequest(`/Properties/getPropertyById/${id}`);
        setProperty(data);
      } catch (err) {
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading)
    return (
      <Layout>
        <p>Loading property details...</p>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <p>{error}</p>
      </Layout>
    );

  return (
    <Layout>
      <div
        className="container"
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <Link to="/" style={{ marginBottom: "20px", display: "inline-block" }}>
          ← Back to Listings
        </Link>
        <h2>{property.title}</h2>
        <div className="d-flex">
          <div className="w-50 me-3">
            <img
              src={property.propertyImage}
              alt={property.title}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <p>
              <strong>Location:</strong> {property.city}, {property.state}
            </p>
            <p>
              <strong>Price:</strong>{" "}
              {property.price ? `$${property.price.toLocaleString()}` : "N/A"}
            </p>
            <p>
              <strong>Size:</strong> {property.size} sq ft
            </p>
            <p>
              <strong>Rooms:</strong> {property.rooms}
            </p>
            <p>
              <strong>Bathrooms:</strong> {property.bathrooms}
            </p>
            <p>
              <strong>Status:</strong> {property.status}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {property.description || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
