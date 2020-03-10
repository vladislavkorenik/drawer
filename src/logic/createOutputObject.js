export const createOutputObject = (text, errors, href = true) => {
  return {
    text: text,
    errors: errors.length ? errors : ["No errors"],
    hasError: !!errors.length,
    href:
      href &&
      `data:text/plain;content-disposition=attachment;filename=file,${text}`
  };
};
