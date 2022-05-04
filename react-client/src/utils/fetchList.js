const axios = require('axios');

module.exports = {
  fetchList: () => {
    return axios.get('/pets')
      .then((response) => response.data)
  }
}