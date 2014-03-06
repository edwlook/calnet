var casClient = require('../../lib').configure({
  username: 'user',
  password: 'pass'
});

console.log(casClient.username);
console.log(casClient.password);
