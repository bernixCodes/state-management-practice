import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      name: "Mum and i",
      price: "$200",
      id: 1234,
    },
    {
      name: "Gifts and Events",
      price: "$120",
      id: 2389,
    },
    {
      name: "Beauty and the Beast",
      price: "$599",
      id: 4009,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
