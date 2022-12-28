import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let selectedDate = null;

startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    const date = new Date();
    if (selectedDates[0] <= date) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled', 'disabled');
      selectedDate = selectedDates;
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  console.log(selectedDate[0]);
}
