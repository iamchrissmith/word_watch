const $ = require('jquery');
const base_url = 'https://wordwatch-api.herokuapp.com';

class WordWatch {

  

  static getTopWord() {
    return $.get(`${base_url}/api/v1/top_word`);
  }
}

module.exports = WordWatch;