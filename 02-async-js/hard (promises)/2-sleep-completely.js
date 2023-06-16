/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}

async function someFunc(seconds)
{
  console.log('Before delay');
  await sleep(seconds);
  console.log('After delay');
}

someFunc(5000);