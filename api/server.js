const app = require('./config/express');

const port = process.env.PORT;

app.listen(port, () => {
  console.log('\nExpress server running in port', port, '\n');
});
