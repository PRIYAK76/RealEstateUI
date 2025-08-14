import React from "react";
import {
  FaDollarSign,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";

const PropertyCard = ({ property, onViewDetails }) => {
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
            <strong>Price:</strong> ${property.price.toLocaleString()}
          </li>
          {/* <li>
            <FaRulerCombined className="me-2" />
            <strong>Size:</strong> {property.size} sq ft
          </li>
          <li>
            <FaBed className="me-2" />
            <strong>Rooms:</strong> {property.rooms}
          </li>
          <li>
            <FaBath className="me-2" />
            <strong>Bathrooms:</strong> {property.bathrooms}
          </li> */}
          <li>
            <FaTag className="me-2" />
            <strong>Status:</strong> {property.status}
          </li>
        </ul>
      </div>
      <div className="card-footer bg-transparent border-0 text-end">
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
      </div>
    </div>
  );
};

export default PropertyCard;
