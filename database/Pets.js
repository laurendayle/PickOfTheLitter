const mongoose = require('mongoose');
const db = require('./index');
require('mongoose').Schema.Types;
mongoose.Promise = global.Promise;

const petsSchema = new mongoose.Schema({
  id: Number,
  organization_id: String,
  species: String,
  breed: { primary: String, secondary: String, mixed: Boolean, unknown: Boolean },
  colors: { primary: String, secondary: String, tertiary: String },
  age: String,
  gender: String,
  size: String,
  coat: String,
  attributes: { spayed_neutered: {}, house_trained: {}, declawed: {}, special_needs: {}, shots_current: {} },
  environment: { children: {}, dogs: {}, cats: {} },
  tags: [String],
  name: String,
  description: String,
  organization_animal_id: {},
  photos: [
    {
      small: String,
      medium: String,
      large: String,
      full: String
    }
  ],
  primary_photo_cropped: {
    small: String,
    medium: String,
    large: String,
    full: String,
  },
  videos: [String],
  status: String,
  published_at: String,
  distance: {},
  contact: {
    email: String,
    phone: {},
    address: {
      address1: String,
      address2: String,
      city: String,
      state: String,
      postcode: String,
      country: String
    }
  },
  _links: {
    self: { href: String },
    type: { href: String },
    organization: { href: String }
  }
});

module.exports = mongoose.model('Pets', petsSchema);

