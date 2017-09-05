const $ = require('jquery');
const WordWatch = require('./WordWatch');

$(document).ready( () => {
  
  $('.top-word h3').append(WordWatch.getTopWord());
})

