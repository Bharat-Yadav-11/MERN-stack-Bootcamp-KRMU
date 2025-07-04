// console.log('first')

// setTimeout(()=>{
//     for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// },0)

// console.log('second')

// setTimeout(() => {
//     for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// for(let i=0;i<999999999;i++){
// }
// }, 0);

// console.log('third')

// console.log('first')

// setTimeout(() => {
//     console.log('second')
// },0);

// console.log('third')

// ........................... callback hell...................................................

// function first(callback) {
//   setTimeout(() => {
//     console.log("first");
//     callback()
//   }, 3000);
// }

// function second(callback) {
//   setTimeout(() => {
//     console.log("Second");
//     callback()
//   }, 2000);
// }

// function third() {
//   setTimeout(() => {
//     console.log("Third");
//   }, 1000);
// }

// first(()=>{

//     second(()=>{

//         third()
//     })
// })

// ......................... promise...................................

// function first() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         console.log("first");
//         resolve();
//       } catch (error) {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function second() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         console.log("Second");
//         resolve();
//       } catch (error) {
//         reject();
//       }
//     }, 2000);
//   });
// }

// function third() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         console.log("Third");
//         resolve();
//       } catch (error) {
//         reject();
//       }
//     }, 1000);
//   });
// }

// first()
// .then(()=>{
//     return second()
// })
// .then(()=>{
//     return third()
// })
//

// first()
// .then(()=>second())
// .then(()=>third())

//.................... async await ....................

function first() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("first");
        resolve();
      } catch (error) {
        reject();
      }
    }, 3000);
  });
}

function second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("Second");
        resolve();
      } catch (error) {
        reject();
      }
    }, 2000);
  });
}

function third() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("Third");
        resolve();
      } catch (error) {
        reject();
      }
    }, 1000);
  });
}

async function temp() {
  await first();
  await second();
  await third();
}

temp();
