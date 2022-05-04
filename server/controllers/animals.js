const Model = require('../models/animals');

module.exports = {
  get: async (req, res) => {
    try {
      const records = await Model.get();
      res.status(200).send(records)
    } catch (err) {
      res.status(500).send(err);
    }
  }
}