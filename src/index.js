const $ = require('jquery');
const WordWatch = require('./WordWatch');

$(document).ready( () => {

  WordWatch.getTopWord()
    .then( el => {
      $('.top-word h3').append(el);
    })
})

