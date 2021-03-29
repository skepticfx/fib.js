function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

addEventListener("fetch", (event) => {
  const start = Date.now();
  const res = fibonacci(50);
  const end = Date.now();
  const delta = end-start;
  
  const response = new Response(`fib(100)=${res}, took ${delta}ms to compute`, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
