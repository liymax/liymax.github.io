self.addEventListener('fetch', function(event) {
  const { url } = event.request
  console.log(url)
  if (url.includes('sw-hello.js')) {
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
