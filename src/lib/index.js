// Original function could be found here: https://www.peterbe.com/plog/cc-formatter
export const cardNumberFormat = (value = '') => {
  let matches = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "").match(/\d{4,16}/g);
  let match = (matches && matches[0]) || "";
  let parts = [];
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(" ");
  }
  return value;
}

export const getValue = (field) => {
  return document.querySelector(field).value;
}

export const validateForm = () => {
  const errors = [];

  if (!getValue("#number")) {
    return errors.concat({ message: 'El campo número de tarjeta es requerido', field: 'number' });
  }
  if (getValue("#number").replace(/\s/g, '').length !== 16) {
    return errors.concat({ message: 'El campo número de tarjeta debe contener 16 caracteres', field: 'number' });
  }
  if (!getValue("#number").match(/^\d+$/g)) {
    return errors.concat({ message: 'El campo número de tarjeta debe ser numérico', field: 'number' });
  }
  if (!getValue("#user")) {
    return errors.concat({ message: 'El campo nombre del tarjetahabiente es requerido', field: 'user' });
  }
  if (getValue("#user").replace(/\s/g, '').length === 0) {
    return errors.concat({ message: 'El campo nombre del tarjetahabiente es requerido', field: 'user' });
  }
  if (!getValue("#month")) {
    return errors.concat({ message: 'El campo mes de vencimiento es requerido', field: 'month' });
  }
  if (getValue("#month").replace(/\s/g, '').length !== 2) {
    return errors.concat({ message: 'El campo mes debe contener 2 caracteres', field: 'month' });
  }
  if (!getValue("#month").match(/^\d+$/g)) {
    return errors.concat({ message: 'El campo mes debe ser numérico', field: 'month' });
  }
  if (!getValue("#year")) {
    return errors.concat({ message: 'El campo año de vencimiento es requerido', field: 'year' });
  }
  if (getValue("#year").replace(/\s/g, '').length !== 2) {
    return errors.concat({ message: 'El campo año de contener 2 caracteres', field: 'year' });
  }
  if (!getValue("#year").match(/^\d+$/g)) {
    return errors.concat({ message: 'El campo año debe ser numérico', field: 'year' });
  }
  if (!getValue("#cvv")) {
    return errors.concat({ message: 'El campo CVV es requerido', field: 'cvv' });
  }
  if (getValue("#cvv").replace(/\s/g, '').length !== 3) {
    return errors.concat({ message: 'El campo CVV no es válido', field: 'cvv' });
  }
  if (!getValue("#cvv").match(/^\d+$/g)) {
    return errors.concat({ message: 'El campo CVV debe ser numérico', field: 'cvv' });
  }
  return errors;
}
