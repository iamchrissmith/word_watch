const $ = require('jquery');
const WordWatchAPI = require('./WordWatchAPI');

class WordWatch {

  formatTopWord(word) {
    return `<span>${Object.keys(word)[0]} (${Object.values(word)[0]})</span>`;
  }

  static topWord() {
    const wordwatch = new WordWatch();
    return WordWatchAPI.getTopWord()
      .then( response => {
        return wordwatch.formatTopWord(response.word);
      })
  }

  static updateCount(e){
    e.preventDefault();

    console.log(e.target);
    const target = $('.word-count');
    const source = $('.text-submission textarea');
    target.append(source.val());
  }
}

module.exports = WordWatch;