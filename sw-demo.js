self.addEventListener('fetch', function(event) {
  const { url } = event.request
  if (url.includes('sw-hello')) {
    console.log(url)
    return new Response('<script>console.log("hello service worker")</script>', {
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
})
