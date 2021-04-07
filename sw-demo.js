self.addEventListener('fetch', function(event) {
  event.respondWith(Promise.resolve().then(() => {
    const { url } = event.request
    if (url.includes('sw-hello.js')) {
      console.log(url)
      return new Response('console.log("hello service worker")', {
        status: 200,
        headers: { 'Content-Type': 'application/javascript' }
      })
    } else {
      return fetch(event.request).then(function (response) {
        return response
      }).catch(function (err) {
        console.log(err)
        return new Response(err)
      })
    }
  }))
})
