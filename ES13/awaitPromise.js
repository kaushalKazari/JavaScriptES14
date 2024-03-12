//NEW ECMAScript 2022
function setTimeoutAsync(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('done');
      }, timeout);
    });
}
  // Waits for timeout - no error thrown
  await setTimeoutAsync(3000);