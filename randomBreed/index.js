'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    //.then(responseJson => console.log(responseJson));
    .then(responseJson => displayPictures(responseJson));
}

function displayPictures(responseJson) {
  $('.pictures').html('');
  if (responseJson.status === "success") {
    $('.pictures').html(`<img src="${responseJson.message}" class="picture">`);
  } else {
    $('.pictures').html(`<p>Sorry there are no pictures of that breed. Please check input.</p>`);
  }

  console.log(responseJson);

}

function watchForm() {
  $('form').submit(event => {
    let breed = $('.js-random-breed').val();
    $('.js-random-breed').val('');
    event.preventDefault();
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});