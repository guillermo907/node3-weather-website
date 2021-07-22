console.log('Client side JS file is loaded');

const weatherForm = document.querySelector('form');
const searchbox = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  const adress = searchbox.value;

  messageOne.textContent = 'Loading....';
  messageTwo.textContent = '';

  fetch(`/weather?adress=${adress}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return (messageOne.textContent = data.error);
      }
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
    });
  });

  e.preventDefault();
});
