function myFunction() {
  const topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }
}

const form = document.querySelector('form');
const submitButton = document.querySelector('#submit-btn');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const subjectInput = document.querySelector('#subject');

function validateForm() {
  const fnameValue = fnameInput.value.trim();
  const lnameValue = lnameInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  
  if (!fnameValue || !lnameValue || !subjectValue) {
    alert('Please fill out all the fields.');
    return false;
  }
  
  return true;
}

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (validateForm()) {
    form.submit();
  }
});

const popupContainer = document.querySelector('.popup-container');
const popupMessage = document.querySelector('.popup-message');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  popupContainer.computedStyleMap.display = 'none';
});

window.addEventListener('load', () => {
  popupContainer.style.display = 'flex';
});