const $ = require('jquery');
const base_url = 'https://wordwatch-api.herokuapp.com';

class WordWatch {

  static sendWord(_word) {
    const cleanWord = _word.replace(/\W/g, '');
    if (cleanWord != '') {
      return $.post(`${base_url}/api/v1/words`, {word: {value: cleanWord}});
    }
  }

  static getTopWord() {
    return $.get(`${base_url}/api/v1/top_word`);
  }
}

module.exports = WordWatch;