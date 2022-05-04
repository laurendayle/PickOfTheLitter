const Pets = require('../../database/Pets');

module.exports = {
  get: async () => {
    try {
      const records = await Pets.find({})
      return records;
    } catch (err) {
      console.error('Error retrieving the data from MongoDB', err);
    }
  }
}

