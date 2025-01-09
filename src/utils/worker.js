// worker.js

// This code runs in the Web Worker background thread
onmessage = function (e) {
  const { data } = e;

  // Perform some heavy computation here
  const result = data.num1 + data.num2;

  // Return the result to the main thread
  postMessage({ result });
};
