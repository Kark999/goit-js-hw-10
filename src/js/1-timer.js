import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import errorIcon from '../img/octagon.svg';
import closeIcon from '../img/close.svg';

const startButton = document.querySelector('.start');
const timerContainer = document.querySelector('.timer');

let userSelectedDate;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      startButton.disabled = true;
      iziToast.show({
        title: '',
        message: 'Please choose a date in the future',
        position: 'topCenter',
        titleColor: '#ffffff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        messageColor: '#ffffff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        iconColor: '#ffffff',
        iconUrl: errorIcon,
        timeout: 5000,
        close: false,
        buttons: [
          [
            `<button type="button" style="background-color: #EF4040" ><img src=${closeIcon}></button>`,
            function (instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast);
            },
          ],
        ],
      });
    } else {
      startButton.disabled = false;
      userSelectedDate = selectedDate;
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimerDisplay(time) {
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  daysElement.textContent = addLeadingZero(time.days);
  hoursElement.textContent = addLeadingZero(time.hours);
  minutesElement.textContent = addLeadingZero(time.minutes);
  secondsElement.textContent = addLeadingZero(time.seconds);
}

function startTimer() {
  startButton.disabled = true;

  const initialTime = Date.now(); // Отримання часу при запуску таймера
  const timerInterval = setInterval(function () {
    const elapsedSeconds = Math.floor((Date.now() - initialTime) / 1000); // Пройдені секунди

    const timeDifference =
      userSelectedDate - initialTime - elapsedSeconds * 1000;

    const adjustedTimeDifference = Math.max(0, timeDifference); // Залишковий час у мілісекундах

    if (adjustedTimeDifference <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const timeRemaining = convertMs(adjustedTimeDifference);
      updateTimerDisplay(timeRemaining);
    }
  }, 1000);
}

startButton.addEventListener('click', function () {
  startTimer();
});
