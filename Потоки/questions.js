const fs = require('fs');

const questions = [
  '1. Основы Node.js:',
  '   - Что такое Node.js и его архитектура.',
  '   - Установка Node.js и npm (Node Package Manager).',
  '   - Основы работы с REPL (Read-Eval-Print Loop).',
  '2. Модули и пакеты:',
  '   - Импорт и экспорт модулей в Node.js.',
  '   - Использование сторонних пакетов с помощью npm.',
  '   - Понимание разницы между глобальными и локальными пакетами.',
  '3. Система файлов и потоки (File System and Streams):',
  '   - Работа с файлами и директориями в Node.js.',
  '   - Использование потоков для обработки данных.',
  '4. Асинхронное программирование:',
  '   - Обзор колбэков (callbacks) и промисов (Promises).',
  '   - Применение async/await для управления асинхронным кодом.',
  '5. Express.js и веб-разработка:',
  '   - Введение в Express.js и создание веб-сервера.',
  '   - Работа с маршрутами (routes) и обработка запросов.',
  '   - Промежуточное ПО (middleware) в Express.',
  '6. WebSocket и реальное время:',
  '   - Введение в WebSocket и библиотеку Socket.io.',
  '   - Создание чат-приложения с WebSocket.',
  '7, Базы данных:',
  '   - Подключение и работа с базами данных, такими как MongoDB или MySQL.',
  '   - Создание моделей данных и выполнение запросов.',
  '8. Аутентификация и безопасность:',
  '   - Реализация аутентификации и авторизации в Node.js приложении.',
  '   - Защита приложения от атак, таких как инъекции и CSRF (межсайтовая подделка запроса).',
];

let writeableStream = fs.createWriteStream('questions.txt');

for (i = 0; i < questions.length; i++) {
  writeableStream.write(questions[i] + '\n');
}
