import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/octagon.svg';
import closeIcon from '../img/close.svg';
import okIcon from '../img/ok.svg';

document.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('[name="delay"]');
  const stateInput = document.querySelector('[name="state"]:checked');

  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '',
        message: `Fulfilled promise in ${delay}ms`,
        timeout: delay,
        class: 'ok-message-snackbar',
        position: 'topCenter',
        messageColor: '#ffffff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#59a10d',
        iconColor: '#ffffff',
        iconUrl: '../img/ok.svg',
        close: false,
        buttons: [
          [
            `<button type="button" style="background-color: #59a10d" "display: flex"><img src=${closeIcon}></button>`,
            function (instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast);
            },
          ],
        ],
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        message: `Rejected promise in ${delay}ms`,
        class: 'error-message-snackbar',
        position: 'topCenter',
        messageColor: '#ffffff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        iconColor: '#ffffff',
        iconUrl: '../img/octagon.svg',
        timeout: delay,
        close: false,
        buttons: [
          [
            `<button type="button" style="background-color: #EF4040" "display: flex"><img src=${closeIcon}></button>`,
            function (instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast);
            },
          ],
        ],
      });
    });
  delayInput.value = '';
});
