import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Pet = ({ pet }) => {

  const listBreeds = (breeds) => {
    for (var key in breeds) {
      if (breeds[key] !== null && breeds[key] !== false) {
        return (
          <span>{breeds[key]}</span>
        )
      }
    }
  }

  return (

      <Card className="pet-card">
        <div className="pet-image">

        </div>
      <CardContent>
        <div className="pet-info">
        <a href={pet.url ? pet.url : ''} target="_blank">{pet.name}<br/></a>
        {pet.species}<br/>
        {pet.gender}<br/>
        {pet.size}<br/>
        {listBreeds(pet.breeds)}
        </div>

        <div>
          <div style={{fontSize: "0.8em", fontWeight: "bold"}}>
            Interested in adding me to your family?<br/>
            Have your people get with my people:
          </div>

          <div>
            <div>{pet.contact.email ? pet.contact.email : ''}</div>
            {pet.contact.phone ? pet.contact.phone : ''}<br/>
            {pet.contact.address.city ? pet.contact.address.city : ''},
            {pet.contact.address.state ? pet.contact.address.state : ''},
            {pet.contact.address.country ? pet.contact.address.country : ''}
          </div>
        </div>
        </CardContent>
      </Card>
  )
}

export default Pet;