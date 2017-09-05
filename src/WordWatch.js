const $ = require('jquery');
const base_url = 'https://wordwatch-api.herokuapp.com';

class WordWatch {

  formatWordCount(word) {
    return `<span>${Object.keys(word)[0]} (${Object.values(word)[0]})</span>`;
  }

  static getTopWord() {
    const wordwatch = new WordWatch();
    return $.get(`${base_url}/api/v1/top_word`)
      .then( response => {
        return wordwatch.formatWordCount(response.word);
      })
  }
}

module.exports = WordWatch;