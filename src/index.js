const $ = require('jquery');
const WordWatch = require('./WordWatch');

$(document).ready( () => {

  WordWatch.topWord()
    .then( el => {
      $('.top-word h3').append(el);
    });

  const submitButton = $('.text-submission button');
  submitButton.on('click', WordWatch.updateCount);

  $('.text-submission textarea').on('keypress', e => {
    if (e.which == 13) {
      e.preventDefault();
      submitButton.click();
    }
  })
});

