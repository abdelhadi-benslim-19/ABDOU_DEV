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