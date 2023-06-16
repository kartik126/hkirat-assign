/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

/*
Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

*/
function wait(n) {
  return new Promise((resolve, reject) => {
    //just to test reject method
    if (n > 10) {
      const err = new Error("Seconds can't take more than 10");
      reject(err);
    }

    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

const promise = wait(3);

promise.then(() => {
  console.log("resolved");
});
