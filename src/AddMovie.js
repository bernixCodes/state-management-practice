import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies(() => [
      ...movies,
      { name: name, price: price, id: Math.random() },
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Movie "
        onChange={handleName}
      />
      <input
        type="text"
        value={price}
        placeholder="Price"
        onChange={handlePrice}
      />
      <button>Submit</button>
    </form>
  );
}

export default AddMovie;
