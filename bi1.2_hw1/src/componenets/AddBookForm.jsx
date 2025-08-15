import React, { useState } from "react";

const BookForm = () => {

  const [book, setBook] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "English", 
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    const bookData = {
      ...book,
      publishedYear: book.publishedYear ? parseInt(book.publishedYear) : null,
      rating: book.rating ? parseFloat(book.rating) : null,
      genre: book.genre.split(",").map((g) => g.trim())
    };

    try {
      const res = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData)
      });


      if (res.ok) {
        alert("Book added successfully!");
        setBook({
          title: "",
          author: "",
          publishedYear: "",
          genre: "",
          language: "English",
          country: "",
          rating: "",
          summary: "",
          coverImageUrl: ""
        });
      } else {
        alert("Failed to add book");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} >
     Title:  <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required /><br /><br />
     Author : <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required /><br /><br />
    Published Year :  <input name="publishedYear" type="number" placeholder="Published Year" value={book.publishedYear} onChange={handleChange} /><br /><br />
     Genre: <input name="genre" placeholder="Genre " value={book.genre} onChange={handleChange} required /><br /><br />
    language:  <input name="language" placeholder="Language" value={book.language} onChange={handleChange} /><br /><br />
   Country:   <input name="country" placeholder="Country" value={book.country} onChange={handleChange} /><br /><br />
     Rating 0-5 :<input name="rating" type="number" step="0.1" placeholder="Rating (0-5)" value={book.rating} onChange={handleChange} /><br /><br />
    Summary  <textarea name="summary" placeholder="Summary" value={book.summary} onChange={handleChange} /><br /><br />
   over Image URL:   <input name="coverImageUrl" placeholder="Cover Image URL" value={book.coverImageUrl} onChange={handleChange} /><br /><br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;


