
const questionTemplate = (idx) => {
  const template = `
    <li class="list-group-item rounded border mb-2 border-info" data-questions-item="">
      <p>Question #${idx}</p>
      <div class="form-group">
        <label for="question_${idx}" class="control-label mb-1">Question*</label>
        <input id="question_${idx}" name="questions[${idx}].question" type="text" class="form-control" aria-required="true"
          aria-invalid="false" required>
      </div>

      <p>Answers</p>
      <ul class="list-group list-group-flush">

        <li class="list-group-item px-0 d-flex">
          <div class="col form-group mb-0">
            <div class="row d-flex align-items-center">
              <div class="col flex-grow-0">
                <label for="name${idx}0" class="control-label mb-0">Answer</label>
              </div>
              <div class="col">
                <input id="name${idx}0" name="questions[${idx}].answers[0].answer" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio${idx}0" class="form-check-label ">
                  <input data-check-right type="radio" id="radio${idx}0" name="questions[${idx}].answers[0].right" value="true" class="form-check-input">Is right
                  </label>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item px-0 d-flex">
          <div class="col form-group mb-0">
            <div class="row d-flex align-items-center">
              <div class="col flex-grow-0">
                <label for="name${idx}1" class="control-label mb-0">Answer</label>
              </div>
              <div class="col">
                <input id="name${idx}1" name="questions[${idx}].answers[1].answer" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio${idx}1" class="form-check-label ">
                  <input data-check-right type="radio" id="radio${idx}1" name="questions[${idx}].answers[1].right" value="true" class="form-check-input">Is right
                  </label>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item px-0 d-flex">
          <div class="col form-group mb-0">
            <div class="row d-flex align-items-center">
              <div class="col flex-grow-0">
                <label for="name${idx}2" class="control-label mb-0">Answer</label>
              </div>
              <div class="col">
                <input id="name${idx}2" name="questions[${idx}].answers[2].answer" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio${idx}2" class="form-check-label ">
                  <input data-check-right type="radio" id="radio${idx}2" name="questions[${idx}].answers[2].right" value="true" class="form-check-input">Is right
                  </label>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item px-0 d-flex">
          <div class="col form-group mb-0">
            <div class="row d-flex align-items-center">
              <div class="col flex-grow-0">
                <label for="name${idx}3" class="control-label mb-0">Answer</label>
              </div>
              <div class="col">
                <input id="name${idx}3" name="questions[${idx}].answers[3].answer" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio${idx}3" class="form-check-label ">
                  <input data-check-right type="radio" id="radio${idx}3" name="questions[${idx}].answers[3].right" value="true" class="form-check-input">Is right
                  </label>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  `;

  const layout = new DOMParser().parseFromString(template, 'text/html').body.firstChild;

  function init() {
    const radios = Array.from(layout.querySelectorAll('[data-check-right]'));
    let last;

    radios.forEach(item => {
      item.addEventListener('input', (e) => {
        if (last) last.checked = false;

        e.currentTarget.checked = true;
        last = e.currentTarget;
      })
    })
  }

  init();

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