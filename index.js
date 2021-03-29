function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

addEventListener("fetch", (event) => {
  const WHAT = 90;
  
  const start = Date.now();
  const res = fibonacci(WHAT);
  const end = Date.now();
  const delta = end-start;
  
  const response = new Response(`fib(${WHAT})=${res}, took ${delta}ms to compute`, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
