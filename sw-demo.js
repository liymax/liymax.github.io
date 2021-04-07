self.addEventListener('fetch', function(event) {
  event.respondWith(Promise.resolve().then(() => {
    const { url } = event.request
    if (url.includes('sw-hello.js')) {
      /*return new Response('console.log("hello service worker")', {
        status: 200,
        headers: { 'Content-Type': 'application/javascript' }
      })*/
      const localReq = new Request('http://localhost:3005/sw-hello.js')
      return fetch(localReq).then(function (response) {
        return response
      }).catch(function (err) {
        console.log(err)
        return err
      })
    } else {
      return fetch(event.request).then(function (response) {
        return response
      }).catch(function (err) {
        console.log(err)
        return err
      })
    }
  }))
})
