function reset() {
  const reset_button = document.querySelector('[data-reset]');
  const form = document.querySelector('[data-task-form]');

  if (reset_button) reset_button.addEventListener('click', () => form.reset());
}

reset();