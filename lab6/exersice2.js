'use strict'

const compose = (...fns) => {
  const handlers = [];

  const composed = (x) => {
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (e) {
      for (const handler of handlers) {
        handler(e);
      }
      return undefined;
    }
  };

  composed.on = (name, handler) => {
    if (name === 'error' && typeof handler === 'function') {
      handlers.push(handler);
    }
  };

  return composed;
};

// Приклад 1: звичайна робота справа наліво
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(inc, twice, cube);
console.log(f1(2)); // 17  (((2 ** 3) * 2) + 1 = 8 * 2 + 1)

// Приклад 2: перехоплення та придушення помилки
const fail = () => {
  throw new Error('Something went wrong');
};

const f2 = compose(inc, fail, cube);
f2.on('error', (e) => {
  console.log('Перехоплено помилку:', e.message);
});

console.log(f2(2));
// Виведе:
// Перехоплено помилку: Something went wrong
// undefined