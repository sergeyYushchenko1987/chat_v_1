const connection = require('./connection');
const queries = require('./queries');

exports.executeQuery = (params, subject, method, callbackResults) => {
  const query = queries[subject][method];
  connection.query(query, params, (error, results) => {
    if (error) {
      return error;
    }
    callbackResults(results);
  });
};
