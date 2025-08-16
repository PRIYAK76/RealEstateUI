import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaDollarSign, FaMapMarkerAlt, FaTag, FaHeart, FaTrash } from "react-icons/fa";
import { postRequest, getRequest } from "../api/apiService";

const PropertyCard = ({ property, onViewDetails, onRemove }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const isOnFavouritesPage = location.pathname === "/favourites";

  const userId = parseInt(localStorage.getItem("userID"));

  useEffect(() => {
    const checkIfFavourite = async () => {
      if (!userId) return;

      try {
        const favourites = await getRequest(`/Properties/getFavouriteProperties/${userId}`);
        const isFav = favourites.some(fav => fav.propertyId === property.id);
        setIsFavourite(isFav);
      } catch (error) {
        console.error("Failed to fetch favourites", error);
      }
    };

    checkIfFavourite();
  }, [property.id, userId]);

  const handleAddToFavourites = async () => {
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const body = {
      userId: userId,
      propertyId: property.id,
    };

    try {
      setLoading(true);
      await postRequest("/Properties/addFavouriteProperty", body);
      setIsFavourite(true);
    } catch (error) {
      console.error("Failed to add to favourites", error);
      alert("Failed to add to favourites.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromFavourites = async () => {
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const body = {
      userId: userId,
      propertyId: property.id,
    };

    try {
      setLoading(true);
      await postRequest("/Properties/removeFavouriteProperty", body); // Update as per your API
      onRemove && onRemove(property.id);
    } catch (error) {
      console.error("Failed to remove from favourites", error);
      alert("Failed to remove from favourites.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="card h-100 shadow"
      style={{
        borderRadius: "15px",
        backgroundColor: "#f7f7f7ff",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <img
        src={property.propertyImage}
        className="card-img-top"
        alt={property.title}
        style={{
          height: "170px",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#5a4d9d" }}>
          {property.title}
        </h5>
        <p className="text-muted mb-3">
          <FaMapMarkerAlt className="me-2" />
          {property.city}, {property.state}
        </p>
        <ul className="list-unstyled small">
          <li>
            <FaDollarSign className="me-2" />
            <strong>Price:</strong> ${property.price?.toLocaleString() || "N/A"}
          </li>
          <li>
            <FaTag className="me-2" />
            <strong>Status:</strong> {property.status}
          </li>
        </ul>
      </div>
      <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
        <button
          className="btn btn-sm"
          style={{
            backgroundColor: "#664a8dff",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
          onClick={() => onViewDetails && onViewDetails(property.id)}
        >
          View Details
        </button>

        {isOnFavouritesPage ? (
          <button
            className="btn btn-sm"
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              borderRadius: "8px",
            }}
            onClick={handleRemoveFromFavourites}
            disabled={loading}
          >
            <FaTrash className="me-1" />
            Remove
          </button>
        ) : (
          <button
            className="btn btn-sm"
            style={{
              backgroundColor: isFavourite ? "gray" : "#e74c3c",
              color: "#fff",
              borderRadius: "8px",
            }}
            onClick={handleAddToFavourites}
            disabled={isFavourite || loading}
          >
            <FaHeart className="me-1" />
            {isFavourite ? "Added" : "Add to Favourites"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
