
export default (idx) => {
  const template = `
    <li class="list-group-item rounded border mb-2 border-info" data-questions-item="">
      <p>Question #${idx}</p>
      <div class="form-group d-flex align-items-center">
        <label for="file_${idx}" class="flex-grow-0 control-label mb-1 mr-2">file*</label>
        <input id="file_${idx}" name="audio[]" type="file" class="flex-grow-1 form-control" accept="audio/*" aria-required="true"
          aria-invalid="false" required>
      </div>
      <div class="form-group d-flex align-items-center">
        <label for="asnwer_${idx}" class="flex-grow-0 control-label mb-1 mr-2">asnwer*</label>
        <input id="answer_${idx}" name="questions[${idx}].answer" type="text" class="form-control">
      </div>
    </li>
  `;

  return new DOMParser().parseFromString(template, 'text/html').body.firstChild;
}