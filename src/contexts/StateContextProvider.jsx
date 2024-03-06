import React, { createContext, useContext, useState } from 'react';
import { debounce } from 'lodash'; // Import debounce function from lodash library

const StateContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Implement debounce to limit request frequency
  const debouncedGetResults = debounce(async (url) => {
    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    });
    const data = await res.json();
    setResults(data);
    setLoading(false);
  }, 500); // Set debounce delay to 500 milliseconds

  const getResults = (url) => {
    debouncedGetResults(url); // Call debounced function instead of directly calling getResults
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
