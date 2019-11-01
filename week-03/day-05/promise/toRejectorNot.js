'use strict'
new Promise((resolve, reject) => {

  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));

})
  .then((msg) => {
    console.log(msg);
  }, onRejected);

function onRejected(error) {
  console.log(error);
}
