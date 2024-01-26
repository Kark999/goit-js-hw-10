import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = document.querySelector('[name="delay"]');
    const stateRadio = document.querySelector('[name="state"]:checked');

    const delay = parseInt(delayInput.value);
    const state = stateRadio ? stateRadio.value : null;

    if (isNaN(delay) || delay <= 0 || !state) {
      // Вивід повідомлення про помилку, якщо дані неправильні
      iziToast.error({
        title: 'Error',
        message:
          'Invalid input. Please enter a valid delay and choose a state.',
        position: 'topCenter',
        timeout: 5000,
      });
      return;
    }

    // Створення промісу
    const notificationPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    // Обробка результатів промісу
    notificationPromise
      .then(resolvedDelay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
          position: 'topCenter',
          timeout: 5000,
        });
      })
      .catch(rejectedDelay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${rejectedDelay}ms`,
          position: 'topCenter',
          timeout: 5000,
        });
      });
  });
});
