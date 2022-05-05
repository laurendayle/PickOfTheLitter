import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapsible from 'react-collapsible';

const Search = (props) => {

  const species = ["Dog", "Cat", "Rabbit"];
  const gender = ["Male", "Female"];
  const age = ["Baby", "Young", "Adult", "Senior"];
  const size = ["Small", "Medium", "Large", "X-Large"];
  const attributes = [["Altered", "spayed_neutered"], ["House Trained", "house_trained"], ["Declawed","declawed"], ["Special Needs", "special_needs"], ["Up to Date on Vaccines", "shots_current"]];
  const environments = [["Good with Children", "children"], ["Good with Cats","cats"], ["Good with Dogs", "dogs"]];

  return (
    <div id="search-bar">

      <div className="relative">
        <input name="search-input" type="text" placeholder="Search" />
      </div>
      <span id="search-bar-title">Filters</span>
      {/* <span className="filter-label">Species</span> */}
      <Collapsible trigger="Species" className="filter-species filter-div">
        {species.map((val, i) => (
          <div className={`${val}_div`, "inner-filter-div"} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`species.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </div>
        ))}
      </Collapsible>

      {/* <div className="filter-label">Gender</div> */}
      <Collapsible trigger="Gender" className="filter-gender filter-div">
        {gender.map((val, i) => (
          <div className={`${val}_div`, "inner-filter-div"} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`gender.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </div>
        ))}
      </Collapsible>

      {/* <div className="filter-label">Age</div> */}
      <Collapsible trigger="Age" className="filter-age filter-div">
        {age.map((val, i) => (
          <div className={`${val}_div`, "inner-filter-div"} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`age.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </div>
        ))}
      </Collapsible>

      {/* <div className="filter-label">Size</div> */}
      <Collapsible trigger="Size" className="filter-size filter-div">
        {size.map((val, i) => (
          <div className={`${val}_div`, "inner-filter-div"} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`size.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </div>
        ))}
      </Collapsible>

      {/* <div className="filter-label">Additional Needs</div> */}
      <Collapsible trigger="Additional Needs" className="filter-attributes filter-div">
        {attributes.map((val, i) => (
          <div className={`${val}_div`, "inner-filter-div"} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val[0]} id={`attributes.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val[0]}/>

          </div>
        ))}
      </Collapsible>

      <Collapsible trigger="Desired Playmates" className="filter-environments filter-div">
        {environments.map((val, i) => (
          <div className={`${val}_div`, "inner-filter-div"} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val[0]} id={`environments.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val[0]}/>
          </div>
        ))}
      </Collapsible>

      <div>
        <button type="button" className="submit-filters" onClick={(e) => props.search(e)}>Apply Filters</button>
      </div>

    </div>

  )
}

export default Search;


