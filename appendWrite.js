var fs = require('fs');

fs.writeFile('mynewfile.txt', 'Great, we have created a new file', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile.txt', ' and I cannot wait to make more!!!!', function (err) {
  if (err) throw err;
  console.log('Updated!');
});