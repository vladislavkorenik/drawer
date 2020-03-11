export const createOutputObject = (
  text = "No data",
  errors = [],
  href = null
) => {
  return {
    text: text,
    errors: errors.length ? errors : ["No errors"],
    hasError: !!errors.length,
    href:
      href &&
      `data:text/plain;content-disposition=attachment;filename=file,${text}`
  };
};
