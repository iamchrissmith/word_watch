const $ = require('jquery');
const WordWatchAPI = require('./WordWatchAPI');

class WordWatch {
  constructor(_words) {
    this.words = _words;
  }

  formatTopWord(word) {
    return `<span>${Object.keys(word)[0]} (${Object.values(word)[0]})</span>`;
  }

  wordHash(hash, word) {
    word = word.toLowerCase();
    hash[word] = (hash[word] || 0 ) + 1;
    return hash;
  }

  postWords(word) {
    return WordWatchAPI.sendWord(word);
  }

  countWords() {
    Promise.all(this.words.split(' ').map(this.postWords))
    .then( res => {
      WordWatch.topWord()
      .then( el => {
        $('.top-word h3 span').remove();
        $('.top-word h3').append(el);
      });
    })
    return this.words.split(' ').reduce(this.wordHash, {});
  }

  createCloudHTML(wordsWithCount) {
    return Object.keys(wordsWithCount).map( word => {
      return `<span style="font-size:${wordsWithCount[word]}em">${word}</span>`;
    }).join(' ');
  }

  wordCloud() {
    const wordCounts = this.countWords();
    return this.createCloudHTML(wordCounts);
  }

  static topWord() {
    const wordwatch = new WordWatch();
    return WordWatchAPI.getTopWord()
      .then( response => {
        return wordwatch.formatTopWord(response.word);
      });
  }

  static updateCount(e){
    e.preventDefault();

    const target = $('.word-count');
    const source = $('.text-submission textarea');
    const wordwatch = new WordWatch(source.val());
    target.empty();
    source.val('');
    target.append(wordwatch.wordCloud());
  }
}

module.exports = WordWatch;