import axios from 'axios';

function ajax(elm) {
  const URL = elm.getAttribute('action');
  const method = elm.getAttribute('method');
  
  async function doRequest() {
    const formData = new FormData(elm);
    try {
      const response = await axios[method.toLowerCase()](URL, formData);
      console.log(response);

    } catch(err) {
      console.error(err);
    }
  }

  function setupListener() {
    elm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      doRequest();
    })
  }

  function init() {
    setupListener();
  }

  init();
}

export default {
  create(selector) {
    const elms = Array.from(document.querySelectorAll(selector));
    elms.forEach(elm => ajax(elm));
  }
};
