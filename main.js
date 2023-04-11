let btnRandom = document.getElementById("btn-random");
btnRandom.addEventListener("click", randomEntertaiment);
let spanResult = document.getElementById("span-result");
let generateActivityBtn = document.getElementById('generate-activity-btn');
generateActivityBtn.addEventListener('click', onGenerateActivityClick);

function randomEntertaiment() {
  spanResult.innerText = 'we are generating your activity...'
  fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(result => { console.log(result); spanResult.innerText = result['activity'] })
    .catch(error => console.log('error', error));
};

let typeSelect = document.getElementById("type-select");
let participantsSelect = document.getElementById("participants-select");
let accessibilitySelect = document.getElementById("accessibility-select");
let priceSelect = document.getElementById("price-select");

function onGenerateActivityClick() {
  let url = 'http://www.boredapi.com/api/activity?';
  url += new URLSearchParams({
    type: typeSelect.value,
    participants: participantsSelect.value,
    accessibility: accessibilitySelect.value,
    price: priceSelect.value
  });
  spanResult.innerText = 'we are generating your activity...'
  fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      if (result['activity'])
        spanResult.innerText = result['activity'];
      else {
        spanResult.innerText = result['error'];
      }
    })
    .catch(error => console.log('error', error));
}

