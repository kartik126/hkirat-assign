/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("one second"));
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("two second"));
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("three second"));
    }, 3000);
  });
}

async function calculateTime() {
  let startAt = new Date();
  await waitOneSecond()
    .then(await waitTwoSecond())
    .then(await waitThreeSecond());
  let endAt = new Date();
  console.log((endAt - startAt) / 1000 + "seconds");
}

calculateTime();
