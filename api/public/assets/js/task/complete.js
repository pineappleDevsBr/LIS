
const questionTemplate = (idx) => {
  const template = `
    <li class="list-group-item rounded border mb-2 border-info row" data-questions-item="">
      <p>Question #${idx}</p>
      <div class="col form-group d-flex align-items-center">
        <label for="questions_${idx}" class="flex-grow-0 control-label mb-1 mr-2">Text*</label>
        <input id="question_${idx}" name="questions[${idx}].text" type="text" class="form-control">
      </div>
      <div class="col form-group d-flex align-items-center">
        <label for="asnwer_${idx}" class="flex-grow-0 control-label mb-1 mr-2">Asnwer*</label>
        <input id="answer_${idx}" name="questions[${idx}].answer" type="text" class="form-control">
      </div>
    </li>
  `;

  const layout = new DOMParser().parseFromString(template, 'text/html').body.firstChild;
  return layout;
}

function addQuestion() {
  const ctx = document.querySelector('[data-questions]');
  const btn = ctx.querySelector('[data-questions-btn]');
  const holder = ctx.querySelector('[data-questions-holder]');
  let idx = 0;

  btn.addEventListener('click', () => {
    if (idx < 11) {
      holder.appendChild(questionTemplate(idx));
      idx += 1;
    } else {
      btn.parentNode.removeChild(btn);
    }
  })
}

addQuestion();