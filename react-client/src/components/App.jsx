import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import PetsList from './PetsList.jsx';
import Search from './Search.jsx';
import { filter } from '../utils/filter';
import { fetchList } from '../utils/fetchList';

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
      <div id="app-container" className="container">

      <div id="navbar-main" className="bg-lime-900 h-10">
        <span>FindFido</span>
      </div>

      <div className="flex">
        <div id="search-col-main" className="w-60 h-full shadow-md bg-white px-1">
          <Search
            setFilters={setFilters}
            search={search}
          />
        </div>

        <div id="pets-list-main" className="">
          <PetsList pets={filteredList.length > 0 ? filteredList : petsList}/>
        </div>
      </div>
    </div>
    )
  }
}

export default App;