import axios from 'axios';

const success = '<div class="m-3 sufee-alert alert with-close alert-success alert-dismissible fade show"><span class="badge badge-pill adge-success">Success</span>You successfully read this important alert.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>'
const failed = '<div class="m-3 sufee-alert alert with-close alert-danger alert-dismissible fade show"><span class="badge badge-pill badge-danger">Success</span>You successfully read this important alert.<button type="button" class="close" data-dismiss="alert" ria-label="Close"><span aria-hidden="true">×</span></button></div>'

function ajax(elm) {
  const URL = elm.getAttribute('action');
  const method = elm.getAttribute('method');
  const submit = elm.querySelector('[type=submit]');
  const feedback = document.createElement('div');

  async function doRequest() {
    const formData = new FormData(elm);
    submit.setAttribute('disabled', true);
    feedback.innerHTML = '';

    try {
      await axios[method.toLowerCase()](URL, formData);
      feedback.innerHTML = success;

    } catch(err) {
      feedback.innerHTML = failed;
    }

    submit.removeAttribute('disabled')
  }

  function setupListener() {
    elm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      doRequest();
    })
  }

  function init() {
    setupListener();
    elm.appendChild(feedback);
  }

  init();
}

export default {
  create(selector) {
    const elms = Array.from(document.querySelectorAll(selector));
    elms.forEach(elm => ajax(elm));
  }
};
