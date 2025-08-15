import React, { useState } from "react";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "", // spelling correct
    genre: [],
    director: "",
    actors: [],
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "releaseYear" || name === "rating"
          ? Number(value) // number convert
          : name === "genre" || name === "actors"
          ? value.split(",").map((item) => item.trim()) // array banane ke liye split
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }

      const data = await response.json();
      console.log("Added Movie", data);
      alert(data ? "Success" : "Fail");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Add New Movie</h3> <br />
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Release Year:</label>
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Genre (comma separated):</label>
        <input
          type="text"
          name="genre"
          value={formData.genre.join(", ")}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Actors (comma separated):</label>
        <input
          type="text"
          name="actors"
          value={formData.actors.join(", ")}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Language:</label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Plot:</label>
        <input
          type="text"
          name="plot"
          value={formData.plot}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Awards:</label>
        <input
          type="text"
          name="awards"
          value={formData.awards}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Poster URL:</label>
        <input
          type="text"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Trailer URL:</label>
        <input
          type="text"
          name="trailerUrl"
          value={formData.trailerUrl}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
