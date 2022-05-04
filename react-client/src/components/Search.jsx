import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Search = (props) => {

  const species = ["Dog", "Cat", "Rabbit"];
  const gender = ["Male", "Female"];
  const age = ["Baby", "Young", "Adult", "Senior"];
  const size = ["Small", "Medium", "Large", "X-Large"];
  const attributes = [["Altered", "spayed_neutered"], ["House Trained", "house_trained"], ["Declawed","declawed"], ["Special Needs", "special_needs"], ["Up to Date on Vaccines", "shots_current"]];
  const environments = [["Good with Children", "children"], ["Good with Cats","cats"], ["Good with Dogs", "dogs"]];

  return (
    <div id="search-bar" >
      <p>Filters</p>
      <div>
        <input name="search-input" type="text" placeholder="Search" />
      </div>

      <div className="filter-species filter-div">
        <div>Species</div>
        {species.map((val, i) => (
          <span className={`${val}_div`} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`species.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </span>
        ))}
      </div>

      <div className="filter-gender filter-div">
        <div>Gender</div>
        {gender.map((val, i) => (
          <span className={`${val}_div`} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`gender.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </span>
        ))}
      </div>

      <div className="filter-age filter-div">
        <div>Age</div>
        {age.map((val, i) => (
          <span className={`${val}_div`} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`age.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </span>
        ))}
      </div>

      <div className="filter-size filter-div">
        <div>Size</div>
        {size.map((val, i) => (
          <span className={`${val}_div`} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val} id={`size.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val}/>
          </span>
        ))}
      </div>

      <div className="filter-attributes filter-div">
        <div>Additional Needs:</div>
        {attributes.map((val, i) => (
          <span className={`${val}_div`} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val[0]} id={`attributes.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val[0]}/>

          </span>
        ))}
      </div>

      <div className="filter-environments filter-div">
        {environments.map((val, i) => (
          <span className={`${val[0]}_div`} key={JSON.stringify(val)}>
            <FormControlLabel control={ <Checkbox  name={val[0]} id={`environments.${val}`} size="small" onChange={(e) => props.setFilters(e.target.id)}/> } label={val[0]}/>
          </span>
        ))}
      </div>

      <div className="submit-filters">
        <button onClick={(e) => props.search(e)}>Search Pets</button>
      </div>
    </div>
  )
}

export default Search;


