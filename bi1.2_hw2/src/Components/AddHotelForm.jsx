import React, { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: [],
    location: "",
    rating: 0,
    reviews: [],
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: [],
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? Number(value)
          : type === "checkbox"
          ? checked
          : name === "category" ||
            name === "reviews" ||
            name === "amenities" ||
            name === "photos"
          ? value.split(",").map((item) => item.trim())
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add hotel");

      const data = await res.json();
      console.log("Hotel Added:", data);
      alert("Hotel added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add hotel.");
    }
  };

  return (
    <div>
      <h3>Add New Hotel</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        <br /><br />

        <label>Category (comma separated):</label>
        <input
          name="category"
          value={formData.category.join(", ")}
          onChange={handleChange}
        />
        <br /><br />

        <label>Location:</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br /><br />

        <label>Rating:</label>
        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br /><br />

        <label>Reviews (comma separated):</label>
        <input
          name="reviews"
          value={formData.reviews.join(", ")}
          onChange={handleChange}
        />
        <br /><br />

        <label>Website:</label>
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br /><br />

        <label>Phone Number:</label>
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br /><br />

        <label>Check-In Time:</label>
        <input
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br /><br />

        <label>Check-Out Time:</label>
        <input
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br /><br />

        <label>Amenities (comma separated):</label>
        <input
          name="amenities"
          value={formData.amenities.join(", ")}
          onChange={handleChange}
        />
        <br /><br />

        <label>Price Range:</label>
        <select
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="$(11-30)">$(11-30)</option>
          <option value="$(31-60)">$(31-60)</option>
          <option value="$(61+)">$(61+)</option>
          <option value="Other">Other</option>
        </select>
        <br /><br />

        <label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
          />
          Reservations Needed
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
          />
          Parking Available
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
          />
          Wifi Available
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
          />
          Pool Available
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
          />
          Spa Available
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
          />
          Restaurant Available
        </label>
        <br /><br />

        <label>Photos (comma separated URLs):</label>
        <input
          name="photos"
          value={formData.photos.join(", ")}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotelForm;

