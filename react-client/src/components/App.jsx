import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import PetsList from './PetsList.jsx';
import Search from './Search.jsx';
import { filter } from '../utils/filter';
import { fetchList } from '../utils/fetchList';
import CssBaseline from '@mui/material/CssBaseline';
import navBarImg from '../assets/mvp-logo-1.jpg';


const App = () => {

  const [petsList, setPetsList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchList()
      .then(items => {
        setIsLoaded(true);
        setPetsList(items);
      })
      .catch(err => {
        setIsLoaded(true);
        setError(error)
      })
  }, []);

  const setFilters = (newFilter) => {
    const isSelected = selectedFilters.includes(newFilter);
    const newSelection = isSelected ? selectedFilters.filter(currentFilter => currentFilter !== newFilter) : [...selectedFilters, newFilter];
    setSelectedFilters(newSelection);
    const newList = filter(selectedFilters, petsList);
    setFilteredList(newList);
  }

  const search = () => {
    const newList = filter(selectedFilters, petsList);
    setFilteredList(newList);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <CssBaseline/>
      <div id="app-container">

      <div id="navbar-main">
        <img id="logo" src={navBarImg} height="42" width="42" alt="" />
        <span id="navbar-title">Pick of the Litter</span>
      </div>

      <div id="main-app-container">
        <Search setFilters={setFilters} search={search} />
        <PetsList pets={filteredList.length > 0 ? filteredList : petsList}/>
      </div>
    </div>
    </>
    )
  }
}
export default App;