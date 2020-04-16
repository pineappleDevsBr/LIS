function radios(elm) {
  const radios = Array.from(elm.querySelectorAll('[data-radio-right]'));
  let last = radios.find(it => it.checked);

  radios.forEach(rd => {
    rd.addEventListener('input', (e) => {
      if (last) last.checked = false;

      e.currentTarget.checked = true;
      last = e.currentTarget;
    })
  })
}

export default {
  create(slc) {
    const elms = Array.from(document.querySelectorAll(slc));
    const instances = [];
    elms.forEach(item => instances.push(radios(item)));
  },

  init(elm) {
    if (elm.querySelector('[data-radio-right]')) {
      return radios(elm);
    }
  }
}