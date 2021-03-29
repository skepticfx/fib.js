function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

addEventListener("fetch", (event) => {
  const { searchParams } = new URL(event.request.url)
  let what = searchParams.get('what') || 25;
  console.log(what)
  console.log(event.request.url);

  const start = Date.now();
  const res = fibonacci(what);
  const end = Date.now();
  const delta = end-start;
  
  const response = new Response(`fib(${what})=${res}, took ${delta}ms to compute`, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
