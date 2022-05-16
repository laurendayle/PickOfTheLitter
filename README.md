# Pick of the Litter

`Pick Of The Litter` is a single-page PetFinder clone built using the [PetFinder API](https://www.petfinder.com/developers/), Node.js, Express and MongoDB. The application allows for convenient viewing of adoptable pet information without having to navigate to another page.

<a href="url"><p align="center"><img src="https://github.com/laurendayle/PickOfTheLitter/blob/master/mvp-landingpage.jpg" alt="" height="350" width="600"/></p></a>

# Contents
- [Description](#description)
- [Usage](#usage)
- [Technologies](#technologies)
- Future Work

## Description

As someone that has spent a lot of time on PetFinder as an end-user, I found it frustrating to navigate back to the same place in the list of available pets after being re-directed to another page to view a specific pet's information.

I created `Pick of the Litter` to allow for a more convenient viewing experience for the user by using CSS to create flip-cards that rotate to display more detailed pet information on hover.

I built this application as part of a '48 hour challenge', during which my goal was to deliver an 'MVP' within a 48 hour time-frame.

## Usage

1. Navigate into the root directory and run `npm install`.
2. In one terminal tab, run `npm run start`.
3. In another terminal tab, run `npm run react-dev`.
4. Navigate to `http://localhost:4000` or `http://localhost:${PORT}` if you opted to use an alternative port, in your browser.

## Technologies
- React
- Express 
- Axios 
- MongoDB
- MaterialUI

## Future Work
- A "Like" feature where users can add pets to a list of pets they would like to view again later
