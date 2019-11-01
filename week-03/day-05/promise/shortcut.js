'use strict'
new Promise((resolve, reject) => {

  resolve();

}).catch((error) => {
  console.log(error);
})

let p = Promise.resolve('asdf');
