const startServer = require('./server');

try {
  startServer();
} catch (err) {
  console.error(err);
  process.exit(1);
}
