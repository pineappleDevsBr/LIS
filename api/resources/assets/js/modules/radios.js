function radios() {
  const elms = Array.from(document.querySelectorAll('[data-radio]'));

  function init() {
    elms.forEach(item => {
      const radios = Array.from(item.querySelectorAll('[data-radio-right]'));
      let last = radios.find(it => it.checked);

      radios.forEach(rd => {
        rd.addEventListener('input', (e) => {
          if (last) last.checked = false;

          e.currentTarget.checked = true;
          last = e.currentTarget;
        })
      })
    })
  }

  init();
}

radios();