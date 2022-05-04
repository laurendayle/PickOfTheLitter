import React from 'react';
import Pet from './Pet.jsx';

const PetsList = (props) => {


  return (
    <div id="pets-list-container" className="">
      <div>Displaying {props.pets.length} results</div>

      <div className="">
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