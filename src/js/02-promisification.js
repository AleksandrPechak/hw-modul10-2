/*
 * Промісифікація:
 * - Функція, яка повертає проміс
 */

/* function foo() {
  const promise = new Promise((resolve, reject) => {
    resolve('hello');
  });
  return promise;
}

foo().then(res => {
  console.log('✅', res);
}); */
//=========================================

/* function createPromise(value, delay, isValid) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise('Hello', 1000, false);

p1.then().then(res => {
  console.log('✅', res);
}).catch(err => {
  console.log('❌', err);
}); */

// function createPromise(value, delay, isValid) {
//   const promise = new Promise((resolve, reject) => {
//     // console.log('Create Promis', value);
//     const data = { value, delay };
//     setTimeout(() => {
//       if (isValid) {
//         resolve(data);
//       } else {
//         reject(data);
//       }
//     }, delay);
//   });

//   return promise;
// }

/* const p1 = createPromise('P1', 8000, true);
const p2 = createPromise('P2', 3000, false);
const p3 = createPromise('P3', 6000, true);
const p4 = createPromise('P4', 5000, false);

p1.then(onFullFiled, onRejected);
p2.then(onFullFiled, onRejected);
p3.then(onFullFiled, onRejected);
p4.then(onFullFiled, onRejected); */

// p1.then().then(res => {
//   console.log('✅', JSON.stringify(res));
// }).catch(err => {
//   console.log('❌', JSON.stringify(err));
// });

// p2.then().then(res => {
//   console.log('✅', JSON.stringify(res));
// }).catch(err => {
//   console.log('❌', JSON.stringify(err));
// });

// p3.then().then(res => {
//   console.log('✅', JSON.stringify(res));
// }).catch(err => {
//   console.log('❌', JSON.stringify(err));
// });

// p4.then().then(res => {
//   console.log('✅', JSON.stringify(res));
// }).catch(err => {
//   console.log('❌', JSON.stringify(err));
// });

//=========================================

// for (let i = 0; i < 5; i++) {
//   const delay = i * 1000;
//   const isActive = Math.random() > 0.5; // true | false
//   const promise = createPromise(i, delay, isActive);
//   promise.then(onFullFiled, onRejected);
// }

// function onFullFiled(res) {
//   console.log('✅', res);
// }

// function onRejected(err) {
//   console.log('❌', err);
// }

//========================================

// const p1 = createPromise('P1', 4000, true);
// const p2 = createPromise('P2', 5000, false);
// const p3 = createPromise('P3', 500, true);
// const p4 = createPromise('P4', 3000, true);

// const arr = [p1, p2, p3, p4];

// console.log(arr);

/* const resultPromise = Promise.all(arr);

resultPromise.then(onFullFiled, onRejected); */


// resultPromise.then(data => {
//   console.log(data);
// });


// const resultPromise = Promise.allSettled(arr);

// resultPromise.then(onFullFiled);

/* const resultPromise = Promise.race(arr);

resultPromise.then(onFullFiled, onRejected); */

/* for (promise of arr) {
  promise.then(onFullFiled, onRejected);
} */

//========================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo(arr) {
//   arr = arr.filter(el => el > 10).map(el => el.toString());
//   return Promise.resolve(arr);
// }

// const result = foo([1]);

// console.log(result);



	// [
	//   { status: "fulfilled", value: 1}, 
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]

/* ========= hw-js-10 =============== */

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// form.addEventListener('submit', createPromise);


// document.querySelector(".form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const delayInput = document.querySelector("input[name='delay']");
//   const stateInput = document.querySelector("input[name='state']:checked");

//   if (!delayInput.checkValidity() || !stateInput) {
//     // Вивести повідомлення про помилку, якщо дані некоректні
//     iziToast.error({
//       title: "Error",
//       message: "Invalid input. Please enter delay and choose state.",
//     });
//     return;
//   }

//   const delay = parseInt(delayInput.value, 10);
//   const state = stateInput.value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === "fulfilled") {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then((result) => {
//       // Вивести повідомлення про вдале виконання промісу
//       iziToast.success({
//         title: "Fulfilled promise",
//         message: `✅ Fulfilled promise in ${result}ms`,
//       });
//     })
//     .catch((error) => {
//       // Вивести повідомлення про невдале виконання промісу
//       iziToast.error({
//         title: "Rejected promise",
//         message: `❌ Rejected promise in ${error}ms`,
//       });
//     });
// });

// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// document.querySelector(".form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const delayInput = document.querySelector("input[name='delay']");
//   const stateInput = document.querySelector("input[name='state']:checked");

//   if (!delayInput.checkValidity() || !stateInput) {
//     // Вивести повідомлення про помилку, якщо дані некоректні
//     iziToast.error({
//       title: "Error",
//       message: "Invalid input. Please enter delay and choose state.",
//     });
//     return;
//   }

//   const delay = parseInt(delayInput.value, 10);
//   const state = stateInput.value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === "fulfilled") {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then((result) => {
//       // Вивести повідомлення про вдале виконання промісу
//       iziToast.success({
//         title: "Fulfilled promise",
//         message: `✅ Fulfilled promise in ${result}ms`,
//       });
//     })
//     .catch((error) => {
//       // Вивести повідомлення про невдале виконання промісу
//       iziToast.error({
//         title: "Rejected promise",
//         message: `❌ Rejected promise in ${error}ms`,
//       });
//     });
// });