
export default (idx) => {
  const template = `
    <li class="list-group-item rounded border mb-2 border-info row" data-questions-item="" data-validation-item="">
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

  return new DOMParser().parseFromString(template, 'text/html').body.firstChild;
}