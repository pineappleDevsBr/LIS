
const questionTemplate = (idx) => {
  const template = `
    <li class="list-group-item rounded border mb-2 border-info">
      <p>Question #${idx}</p>
      <div class="form-group">
        <label for="money" class="control-label mb-1">Name*</label>
        <input id="money" name="money" type="text" class="form-control" aria-required="true"
          aria-invalid="false" required>
      </div>

      <p>Answers</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item px-0 d-flex">
          <div class="col form-group mb-0">
            <div class="row d-flex align-items-center">
              <div class="col flex-grow-0">
                <label for="name_${idx}" class="control-label mb-0">Answer</label>
              </div>
              <div class="col">
                <input id="name_${idx}" name="questions[${idx}]['answer']" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio_${idx}" class="form-check-label ">
                  <input type="radio" id="radio_${idx}" name="questions[${idx}]['right']" value="true" class="form-check-input">Is right
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
                <label for="money" class="control-label mb-0">Text</label>
              </div>
              <div class="col">
                <input id="money" name="money" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio1" class="form-check-label ">
                  <input type="radio" id="radio1" name="radios" value="option1" class="form-check-input">Is right
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
                <label for="money" class="control-label mb-0">Text</label>
              </div>
              <div class="col">
                <input id="money" name="money" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio1" class="form-check-label ">
                  <input type="radio" id="radio1" name="radios" value="option1" class="form-check-input">Is right
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
                <label for="money" class="control-label mb-0">Text</label>
              </div>
              <div class="col">
                <input id="money" name="money" type="text" class="form-control"
              aria-invalid="false">
              </div>
            </div>
          </div>
          <div class="col form-group mb-0 d-flex align-items-center">
            <div class="col col-md-9">
              <div class="form-check">
                <div class="radio">
                  <label for="radio1" class="form-check-label ">
                  <input type="radio" id="radio1" name="radios" value="option1" class="form-check-input">Is right
                  </label>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  `;

  return new DOMParser().parseFromString(template, 'text/html').body.firstChild;
}

function addQuestion() {
  const ctx = document.querySelector('[data-questions]');
  const btn = ctx.querySelector('[data-questions-btn]');
  const holder = ctx.querySelector('[data-questions-holder]');
  let idx = 0;

  btn.addEventListener('click', () => {
    holder.appendChild(questionTemplate(idx));
    idx += 1;
  })
}

addQuestion();