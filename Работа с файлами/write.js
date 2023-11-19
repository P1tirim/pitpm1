const fs = require('fs');

fs.writeFile('qwe.txt', 'Hello мир!', function (error) {
  if (error) throw error; // если возникла ошибка
  console.log('Асинхронная запись файла завершена. Содержимое файла:');
  let data = fs.readFileSync('qwe.txt', 'utf8');
  console.log(data); // выводим считанные данные
});
