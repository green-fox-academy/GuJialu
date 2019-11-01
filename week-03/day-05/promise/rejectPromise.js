const promise = new Promise(function (resolve, reject) {
  // Your solution here
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
})
  .then(console.log, onReject);

function onReject(error) {
  // Your solution here
  console.log(error.message);
}

