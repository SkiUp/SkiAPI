const fs = require('fs');

fs.readFile(`./env/${process.env.NEST_ENV}.json`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const json =
    'NEST_CONFIG=' + data.replace(/(\r\n|\n|\r)/gm, '').replace(/\s/g, '');

  fs.writeFile('./nest.env', json, { flag: 'wx' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Nest environment file created');
  });
});
