function validation(elm) {
  const ctx = elm;
  const quant = elm.dataset.validation;
  const error = document.querySelector('[data-error]');

  ctx.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(ctx.querySelectorAll('[data-validation-item]').length, quant);

    if (ctx.querySelectorAll('[data-validation-item]').length < quant) {
      error.classList.add('show');
    } else {
      e.currentTarget.submit();
    }
  })
}

export default {
  create(slc) {
    const elms = Array.from(document.querySelectorAll(slc));
    const instances = [];
    elms.forEach(item => instances.push(validation(item)));
  }
}