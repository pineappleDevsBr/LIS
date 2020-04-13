function validation() {
  const ctx = document.querySelector('[data-task-form]');
  const error = document.querySelector('[data-error]');

  // ctx.addEventListener('submit', (e) => {
  //   e.preventDefault();

  //   if (ctx.querySelectorAll('[data-questions-item]').length < 10) {
  //     error.classList.add('show');
  //   } else {
  //     e.currentTarget.submit();
  //   }
  // })
}

function reset() {
  const reset_button = document.querySelector('[data-reset]');
  const form = document.querySelector('[data-task-form]');

  if (reset_button) reset_button.addEventListener('click', () => form.reset());
}

reset();
validation()