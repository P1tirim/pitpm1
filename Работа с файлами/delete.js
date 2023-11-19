const fs = require('fs');

fs.unlink('qwe.txt', (err) => {
  if (err) console.log(err);
  // если возникла ошибка
  else console.log('qwe.txt was deleted');
});
