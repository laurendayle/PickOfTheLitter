import React from "react";
import Chip from '@mui/material/Chip';
import placeholderImg from '../assets/placeholder.jpg';

const Pet = ({ pet }) => {
  const listBreeds = (breeds) => {
    for (var key in breeds) {
      if (breeds[key] !== null && breeds[key] !== false) {
        return <span>{breeds[key]}</span>;
      }
    }
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          { pet.photos.length ? <img className="pet-image" src={`${pet.primary_photo_cropped["medium"]}`} alt=""/> : <img className="pet-image" src={ placeholderImg } />}
          <a href={pet.url} className="card-title" > {pet.name} </a>
          <p style={{margin: "0"}}> {pet.gender} &#9642; {pet.contact.address.city ? pet.contact.address.city : "" }, {pet.contact.address.state ? pet.contact.address.state : ""}, {pet.contact.address.country ? pet.contact.address.country : ""}  &#9642; {listBreeds(pet.breeds)} </p>

        </div>
        <div className="flip-card-back">

          <p className="card-title">
            <a href={pet.url} className="card-title"> {pet.name} </a>
          </p>

          <div style={{textAlign: "left"}}>
            <p><b>About me:</b><br /> {pet.description} </p>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {!pet.tags.length ? "" : pet.tags.map((tag) => (
              <Chip
                style={{margin: "3px"}}
                key={JSON.stringify(tag)}
                label={tag}
                variant="outlined"
              />
            ))}
            </div>

          </div>

          <div style={{fontSize: "0.8em", bottom: "1%"}} id="pet-contactInfo">
          <p><b>Interested in adding me to your family? <br /> Have your people get with my people:</b></p>

          <p style={{overflowWrap: "break-word"}}>
            {pet.contact.email ? pet.contact.email : ""}<br />
            {pet.contact.phone ? pet.contact.phone : ""}<br />
            {pet.contact.address.city ? pet.contact.address.city : ""},&#160;
            {pet.contact.address.state ? pet.contact.address.state : ""},&#160;
            {pet.contact.address.country ? pet.contact.address.country : ""}
          </p>
        </div>
        </div>
      </div>
      </div>

  );
};

export default Pet;
