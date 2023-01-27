const express = require('express');
const session = require('express-session');

const app = express();
const memoryStore = new session.MemoryStore();
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: memoryStore
}))
const keycloak = require('./config.js').initKeycloak(memoryStore);
app.use(keycloak.middleware());
const testController = require('./controller.js');

app.use('/test', testController);

app.get('/', function(req, res) {
  res.send('Server up');
})

app.listen(5000);