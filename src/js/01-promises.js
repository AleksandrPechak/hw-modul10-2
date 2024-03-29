/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 500);
// });

// setInterval(() => {
//   console.log(promise);
// }, 600);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//     resolve(true);
//       } else {
//         reject(false);
//       }
//     }, 100);
//   });
  
// promise.then(onFullFiled, onRejected);

// function onFullFiled(msg) {
//   console.log('✅', msg);
//  }

// function onRejected(err) {
//   console.log('❌', err);
// }

/* promise.then(onFullFiled, onRejected);

promise.then(onFullFiled).catch(onRejected);

function onFullFiled(msg) {
  console.log('✅', msg);
}

function onRejected(err) {
  console.log('❌', err);
} */

// promise.then(
//   msg => {
//     console.log('✅', msg);
//   },
//   err => {
//     console.log('❌', err);
//   },
// );

// promise
//   .then(msg => {
//     console.log('✅', msg);
//     console.log('Call1');
//     console.log('Call2');
//   })
//   .catch(err => {
//     console.log('❌', err);
//     console.log('Call3');
//     console.log('Call4');
//   })
//   .finally(() => {
//     console.log('Call5');
//     console.log('Call6');
//     console.log('Call7');
//   });

// =========================================
/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0) {
      resolve(10);
    } else {
      reject(false);
    }
  }, 3000);
});

// promise
//   .then(v1 => {
//     console.log(v1);
//     return v1 * 2;
//   })
//   .then(v2 => {
//     console.log(v2);
//     return v2 * 2;
//   })
//   .then(v3 => {
//     console.log(v3);
//     return v3 * 2;
//   })
//   .then(v4 => {
//     console.log(v4);
//     return v4 * 2;
//   })
//   .catch(v5 => {
//     console.log(v5);
//     return v5 * 2;
//   });

// promise
//   .then(msg => {
//     console.log('✅', msg);
//     return 10;
//   })
//   .then(msg => {
//     console.log('✅', msg);
//   })
//   .then(msg => {
//     console.log('✅', msg);
//   })
//   .then(msg => {
//     console.log('✅', msg);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });