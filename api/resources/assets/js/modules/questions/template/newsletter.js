export default (idx) => {
  const template = `
  <li class="list-group-item rounded border mb-2 border-info" data-questions-item="" data-validation-item="">
    <div class="row">
      <div class="col form-group">
        <label for="text-${idx}" class="control-label mb-1">Text</label>
        <input id="text-${idx}" name="payload.items[${idx}].text" type="text" class="form-control" aria-required="true"
          aria-invalid="false" required>
      </div>
    </div>
    <div class="row">
      <div class="col form-group">
        <label for="image-${idx}" class="control-label mb-1">Image</label>
        <select name="payload.items[${idx}].image" id="image-${idx}" class="form-control" required>
          <option value="">Select</option>
          <option value="flag">Flag</option>
          <option value="timeline">Timline</option>
        </select>
      </div>
    </div>
  </li>
  `;

  return new DOMParser().parseFromString(template, 'text/html').body.firstChild;
}

