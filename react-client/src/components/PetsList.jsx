import React from 'react';
import Pet from './Pet.jsx';

const PetsList = (props) => {


  return (
    <div id="pets-list-container">
      <span style={{float: "right", fontWeight: "bold"}} id="display-count">Displaying {props.pets.length} results</span>

      <div direction="row" id="pets-list-inner-container">
        {props.pets.map((pet) => (
          <div className="pet-tile" key={JSON.stringify(pet)}>
            <Pet pet={pet}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PetsList;