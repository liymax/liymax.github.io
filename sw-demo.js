self.addEventListener('fetch', function(event) {
  const { url } = event.request
  if (url.includes('sw-hello.js')) {
    console.log(url)
    event.respondWith(new Response('console.log("hello service worker")', {
      status: 200,
      headers: { 'Content-Type': 'application/javascript' }
    }))
  } else {
    return fetch(event.request).then(function (response) {
      return response
    }).catch(function (err) {
      console.log(err)
      event.respondWith(err)
    })
  }
})
