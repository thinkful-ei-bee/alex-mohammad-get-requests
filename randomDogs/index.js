'use strict';

function getDogImage(newNumber) {
  fetch(`https://dog.ceo/api/breeds/image/random/${newNumber}`)
    .then(response => response.json())
    .then(responseJson => displayPictures(responseJson, newNumber));
}

function displayPictures(responseJson, newNumber) {
  console.log(responseJson);
  $('.pictures').html('');
  for (let i = 0; i < newNumber; i++) {
    $('.pictures').append(`<img src="${responseJson.message[i]}" class="picture">`);
  }
}

function watchForm() {
  $('form').submit(event => {
    let newNumber = 3;
    let nums = parseInt($('.js-number-of-dogs').val());
    if (!isNaN(nums)) {
      newNumber = nums;
    }
    //console.log(newNumber);
    $('.js-number-of-dogs').val('');
    event.preventDefault();
    getDogImage(newNumber);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});