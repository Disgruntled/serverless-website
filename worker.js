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

    const index = await kv_variables.get("index")
    let response = new Response(index)
    response.headers.set('content-type', 'text/html; Charset=UTF-8')
  
    
  
    return response
  }
  