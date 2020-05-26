export function formToFormData(form) {
  const elems = form.elements;
  const fields = [].slice.call(elems);

  const validNodeNames = ["INPUT", "TEXTAREA"];

  const data = fields
    .filter((elem) => validNodeNames.indexOf(elem.nodeName) >= 0)
    .filter((elem) => elem.type !== "radio" || elem.checked === true)
    .reduce((acc, elem) => {
      return { ...acc, [elem.name]: elem.value };
    }, {});

  return data;
}

export default { formToFormData };
