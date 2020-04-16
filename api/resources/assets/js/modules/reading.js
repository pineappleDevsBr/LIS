
const questionTemplate = (idx) => {
  const template = `
    <li class="list-group-item rounded border mb-2 border-info" data-questions-item="">
      <p>Question #${idx}</p>
      <div class="form-group d-flex align-items-center">
        <label for="asnwer_${idx}" class="flex-grow-0 control-label mb-1 mr-2">answer*</label>
        <input id="answer_${idx}" name="questions[${idx}].question" type="text" class="form-control">
      </div>
      <div class="form-group d-flex align-items-center">
        <label for="text_${idx}" class="flex-grow-0 control-label mb-1 mr-2">text*</label>
        <textarea id="text_${idx}" name="questions[${idx}].text" type="file" class="flex-grow-1 form-control" aria-required="true"
        aria-invalid="false" required></textarea>
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