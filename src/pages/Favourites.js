import React,{useState,useEffect} from "react";
import Layout from "../components/Layout";
import PropertyCard from "../components/PropertyCard";
import { getRequest } from "../api/apiService";

const Favourites = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await getRequest(`/Properties/getFavouriteProperties/${userID}`);
        setProperties(data);
      } catch (err) {
        setError("Failed to fetch properties.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  const handleViewDetails = (propertyId) => {
    console.log("View details for property:", propertyId);
  };

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>{error}</div>;

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
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Favourites;
