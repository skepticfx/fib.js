function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

addEventListener("fetch", (event) => {
  const start = Date.now();
  const res = fibonacci(100);
  const end = Date.now();
  const delta = end-start;
  
  const response = new Response(`fib(100)=${res}, took ${delta}ms to compute`, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
