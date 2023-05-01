function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const subjectInput = document.querySelector('#subject');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  
  const fnameValue = fnameInput.value.trim();
  const lnameValue = lnameInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  
  if (!fnameValue || !lnameValue || !subjectValue) {
    alert('Please fill out all the fields.');
  } else {
    form.submit();
  }
});

const popupMessage = document.getElementById('popup-message');
const closeButton = document.getElementById('close-button');

if (!getCookie('hasSeenMessage')) {
  popupMessage.style.display = 'block';

  closeButton.addEventListener('click', () => {
    popupMessage.style.display = 'none';
    setCookie('hasSeenMessage', true, 7);
  });
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

