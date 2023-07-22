const getFormikErrors = (formik, object) => {
  const errorsObj = {};
  Object.keys(object).forEach((item) => {
    errorsObj[item] = formik.touched[item] && formik.errors[item];
  });
  return errorsObj;
};
export { getFormikErrors };
