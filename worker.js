addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {



    const parsedUrl = new URL(request.url)
    if  (parsedUrl.pathname === "/styles.css")
        {
          /*kv_variables is a reference to my cloudflare KV store, the variable is set through some CF magic */
            const styles = await kv_variables.get("styles")
            let response = new Response(styles)
            response.headers.set('content-type', 'text/css; Charset=UTF-8')
            return response
        }

        if  (parsedUrl.pathname === "/calvin.jpg")
        {
          /*kv_variables is a reference to my cloudflare KV store, the variable is set through some CF magic */
            const calvin = await kv_variables.get("calvin")
            let response = new Response(calvin)
            response.headers.set('Content-Type', 'text/html; Charset=UTF-8')
            response.headers.set('Server', 'cloudflare-workers')
            response.headers.set('Connection', 'keep-alive')
            return response
        }
 
        if  (parsedUrl.pathname === "/trip.html")
        {
          /*kv_variables is a reference to my cloudflare KV store, the variable is set through some CF magic */
            const styles = await kv_variables.get("trip")
            let response = new Response(styles)
            response.headers.set('content-type', 'text/html; Charset=UTF-8')
            return response
        }

    const index = await kv_variables.get("index")
    let response = new Response(index)
    response.headers.set('Content-Type', 'text/html; Charset=UTF-8')
    response.headers.set('Server', 'cloudflare-workers')
    response.headers.set('Connection', 'keep-alive')
  
    
  
    return response
  }
  