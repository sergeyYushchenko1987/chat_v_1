const parameters = require('./params');
exports.checkParams = (params, subject, action) => {
  const emptyParams = [];
  const check = [];
  Object.keys(params).forEach((key) => {
    if (!params[key] && parameters[subject][action].includes(key)) {
      emptyParams.push(key);
    }
    check.push(key);
  });
  const noParams = [
    ...parameters[subject][action].filter(
      (element) => !check.includes(element)
    ),
    ...emptyParams,
  ];
  if (noParams.length === 0) {
    return false;
  }
  return {
    status: 400,
    description: `Request isn't entire, it doesn't contain - ${noParams}`,
  };
};
