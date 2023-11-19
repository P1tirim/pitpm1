const Emitter = require('events');
let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, function () {
  console.log('Hello all!');
});

emitter.on(eventName, function () {
  console.log('Привет!');
});

emitter.on(eventName, function (data) {
  console.log(data);
});

emitter.emit(eventName);

emitter.emit(eventName, 'Привет пир!');
