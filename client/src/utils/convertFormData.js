export const convertFormData = (formElement) => {
  const dataForm = new FormData(formElement);
  const data = Object.fromEntries(dataForm);
  return data;
};
