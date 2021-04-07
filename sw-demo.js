self.addEventListener('fetch', function(event) {
  const { url } = event.request
  
  if (url.indexOf('sw-hello.js') !== -1) {
    console.log(url)
    return new Response('<script>console.log("hello service worker")</script>', {
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
})
