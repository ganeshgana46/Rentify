import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, updateDoc, addDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function ViewProperties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const querySnapshot = await getDocs(collection(db, "properties"));
      setProperties(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProperties();
  }, []);

  const handleLikeClick = async (property) => {
    const propertyRef = doc(db, "properties", property.id);
    await updateDoc(propertyRef, {
      likes: property.likes + 1,
    });
  };

  const handleInterestedClick = async (property) => {
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to express interest.");
      navigate("/login");
      return;
    }

    try {
      await addDoc(collection(db, "interested"), {
        propertyId: property.id,
        buyerName: user.displayName,
        buyerEmail: user.email,
      });
      alert("Interest expressed! You will receive an email shortly.");
    } catch (error) {
      alert("Failed to express interest: " + error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">View Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg font-semibold text-gray-700">
              Area: <span className="text-gray-900">{property.area}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Bedrooms: <span className="text-gray-900">{property.bedrooms}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Bathrooms: <span className="text-gray-900">{property.bathrooms}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Nearby Hospitals: <span className="text-gray-900">{property.nearbyHospitals}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Nearby Colleges: <span className="text-gray-900">{property.nearbyColleges}</span>
            </p>
            <button
              onClick={() => handleLikeClick(property)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors duration-300"
            >
              Like ({property.likes})
            </button>
            <button
              onClick={() => handleInterestedClick(property)}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition-colors duration-300"
            >
              I'm Interested
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewProperties;
