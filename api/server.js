const app = require('./config/express');

const port = process.env.PORT;

app.listen(port, () => {
  /* eslint no-console: ["error", { allow: ["log"] }] */
  console.log('\nExpress server running in port', port, '\n');
});
