import React, { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function PostProperty() {
  const [propertyDetails, setPropertyDetails] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    nearbyHospitals: "",
    nearbyColleges: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const postProperty = (e) => {
    e.preventDefault();
    const { area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } =
      propertyDetails;

    if (
      !area ||
      !bedrooms ||
      !bathrooms ||
      !nearbyHospitals ||
      !nearbyColleges
    ) {
      alert("All fields are required!");
      return;
    }

    const user = auth.currentUser;
    if (user) {
      addDoc(collection(db, "properties"), {
        ...propertyDetails,
        owner: user.uid,
        ownerName: user.displayName,
      }).catch((error) => alert(error.message));
    } else {
      alert("You must be logged in to post a property.");
    }
  };

  return (
    <div className="post-property bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex justify-center items-center">
      <form
        onSubmit={postProperty}
        className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Post Property
        </h1>
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="area"
            value={propertyDetails.area}
            onChange={handleChange}
            placeholder="Area"
            className="input-field"
          />
          <input
            type="text"
            name="bedrooms"
            value={propertyDetails.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
            className="input-field"
          />
          <input
            type="text"
            name="bathrooms"
            value={propertyDetails.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="input-field"
          />
          <input
            type="text"
            name="nearbyHospitals"
            value={propertyDetails.nearbyHospitals}
            onChange={handleChange}
            placeholder="Nearby Hospitals"
            className="input-field"
          />
          <input
            type="text"
            name="nearbyColleges"
            value={propertyDetails.nearbyColleges}
            onChange={handleChange}
            placeholder="Nearby Colleges"
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="btn-primary mt-8 w-full py-2 rounded-lg text-black font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostProperty;
