const fs = require('fs');

fs.appendFileSync('qwe.txt', 'Привет ми ми ми!');

fs.appendFile('qwe.txt', 'Привет МИД!', function (error) {
  if (error) throw error; // если возникла ошибка

  console.log('Запись файла завершена. Содержимое файла:');
  let data = fs.readFileSync('qwe.txt', 'utf8');
  console.log(data); // выводим считанные данные
});
