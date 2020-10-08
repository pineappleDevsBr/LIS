import quiz from './template/quiz';
import complete from './template/complete';
import listening from './template/listening';
import reading from './template/reading';
import newsletter from './template/newsletter';
import radio from '../radios';

const templates = {
  quiz,
  complete,
  listening,
  reading,
  newsletter
}

function questions(elm) {
  const ctx = elm;
  const btn = ctx.querySelector('[data-questions-btn]');
  const holder = ctx.querySelector('[data-questions-holder]');
  const config = JSON.parse(elm.dataset.questions);
  let idx = 1;

  btn.addEventListener('click', () => {
    if (idx <= config.count) {
      const template = templates[config.template](idx);
      radio.init(template);
      holder.appendChild(template);
      idx += 1;
    } else {
      btn.parentNode.removeChild(btn);
    }
  })
}

export default {
  create(slc) {
    const elms = Array.from(document.querySelectorAll(slc));
    const instances = [];
    elms.forEach(item => instances.push(questions(item)));
  }
}