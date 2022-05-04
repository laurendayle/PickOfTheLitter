import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Pet = ({ pet }) => {
  const listBreeds = (breeds) => {
    for (var key in breeds) {
      if (breeds[key] !== null && breeds[key] !== false) {
        return <span>{breeds[key]}</span>;
      }
    }
  };

  return (
    <Card className="pet-card-container">
      {/* <CardContent> */}
        <div className="pet-image-container">
        <a href={pet.url ? pet.url : ""} target="_blank" className="card-title" > {pet.name} </a>

          {pet.photos.length ? ( <img className="pet-image" height="150" width="150" src={`${pet.photos[0]["medium"]}`} alt=""/>) : (<></>)}



        </div>

        <div>
          {pet.species}
          <br />
          {pet.gender}
          <br />
          {pet.size}
          <br />
          {listBreeds(pet.breeds)}
        </div>

        <div id="pet-contactInfo">
          <p>
            Interested in adding me to your family?
            <br />
            Have your people get with my people:
          </p>

          <p>
            {pet.contact.email ? pet.contact.email : ""}
            {pet.contact.phone ? pet.contact.phone : ""}
            {pet.contact.address.city ? pet.contact.address.city : ""},
            {pet.contact.address.state ? pet.contact.address.state : ""},
            {pet.contact.address.country ? pet.contact.address.country : ""}
          </p>
        </div>
      {/* </CardContent> */}
    </Card>
  );
};

export default Pet;
