// /*
// Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
// Name: Felipe Aguayo
// Submitted: 08/01/25

// I declare that the following source code was written by me, or provided
// by the instructor for this project. I understand that copying source
// code from any other source, providing source code to another student,
// or leaving my code on a public web site constitutes cheating.
// I acknowledge that  If I am found in violation of this policy this may result
// in a zero grade, a permanent record on file and possibly immediate failure of the class.

// */

let phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/;

const stateAbbreviations = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];
let form = null;
let successMsg = null;
function initValidation(formId, successId) {
  form = document.getElementById(formId);
  successMsg = document.getElementById(successId);

  let inputs = document.querySelectorAll('input');
  for (input of inputs) {
    input.addEventListener('change', inputChanged);
  }
  form.addEventListener('submit', submitForm);
}
function inputChanged(ev) {
  let el = ev.currentTarget;
  el.classList.add('was-validated');
  validateForm();
}

function submitForm(ev) {
  console.log('in submit');
  let form = ev.currentTarget;
  ev.preventDefault();
  ev.stopPropagation();

  validateForm();

  if (!form.checkValidity()) {
    let inputs = form.querySelectorAll('input');
    for (let input of inputs) {
      input.classList.add('was-validated');
    }
  } else {
    form.style.display = 'none';
    successMsg.style.display = 'block';
  }
}

function validateForm() {
  checkRequired('first-name', 'First Name is Required');
  checkRequired('last-name', 'Last Name is Required');
  checkRequired('address', 'Address is Required');
  checkRequired('city', 'City is Required');

  if (checkRequired('state', 'State is Required')) {
    validateState('state', 'Not a valid State, enter two digit code e.g., UT');
  }

  if (checkRequired('email', 'Email Address is required')) {
    checkFormat('email', 'email format is bad', emailRegex);
  }
  if (checkRequired('zip', 'Zip Code is Required')) {
    checkFormat(
      'zip',
      `malformed zip-code, please use either "#####", or "#####-#### format.`,
      zipCodeRegex
    );
  }
  if (checkRequired('phone', 'Phone is required')) {
    checkFormat('phone', 'phone format is bad', phoneRegex);
  }
  checkRequired('newspaper', 'you must select at least one!');
}

function validateState(id, msg) {
  let el = document.getElementById(id);

  let value = el.value.toUpperCase();
  let valid = stateAbbreviations.includes(value);
  setElementValidity(id, valid, msg);
  return valid;
}

function checkFormat(id, msg, regex) {
  let el = document.getElementById(id);
  let value = el.value;
  let valid = regex.test(value);

  setElementValidity(id, valid, msg);
  return valid;
}

function checkRequired(id, message) {
  let el = document.getElementById(id);
  let valid = false;
  let type = el.type;
  switch (type) {
    case 'text':
    case 'password':
      valid = el.value.trim() !== '';

      break;

    case 'checkbox':
      const inputs = document.querySelectorAll(`input[name="${el.name}"]`);
      valid = Array.from(inputs).some((box) => box.checked);
      break;
    case 'radio':
  }
  setElementValidity(id, valid, message);

  return valid;
}

function setElementValidity(id, valid, message) {
  let el = document.getElementById(id);
  let msgDiv = el.nextElementSibling;
  if (message === 'you must select at least one!') {
    msgDiv = msgDiv.nextElementSibling;
  }

  if (valid) {
    el.classList.remove('was-validated');
    el.setCustomValidity;
    el.setCustomValidity('');
    if (msgDiv) msgDiv.textContent = '';
  } else {
    el.classList.add('was-validated');
    el.setCustomValidity(message);
    if (msgDiv) msgDiv.textContent = message;
  }
}
