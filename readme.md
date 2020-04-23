# A serverless website, powered by cloudflare workers

=====

This started off a short experiment to see if I could make a simple static website that was easy to update using only cloudflare workers, but it turned into so much more.

## Serverless

Not really, but there is no shell here. Just a lot of API calls:

https://en.wikipedia.org/wiki/Serverless_computing

## Implementing this for yourself

Step 1) Register for cloudflare. Free tier will do

Step 2) Enroll your domain in cloudflare. You Will need to create an "A" record. I just used a random IP from google

Step 3) Enroll for workers. It is indeed free now.

Step 4) Enroll in the cloudflare KV beta from the workers page. Create a namespace

Step 5) Setup your workers with the route you want. I recommend https://yourdomain.com/* and http://yourdomain.com/*

Step 6) Bind a variable for your KV namespace in the cloudflare workers "resources" tab in the workers editor

Step 7) Upload worker.js as your worker. If you bind the namespace variable as kv_variables you're almost done

step 8) upload some raw HTML to the "index" key value and a stylesheet to the "styles" value (examples provided below)

step 9) visit the bizare creation you've made

## One Liners for updating the KV 

index.html:

```shell
 curl "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_UID/storage/kv/namespaces/$NAMESPACEID/values/index" -X PUT-H "X-Auth-Email: $CLOUDFLARE_EMAIL -H "X-Auth-Key: $CLODUFLARE_API_KEY" --data @index.html
```

styles.css:
```shell
curl "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_UID/storage/kv/namespaces/$NAMESPACEID/values/styles" -X PUT-H "X-Auth-Email: $CLOUDFLARE_EMAIL -H "X-Auth-Key: $CLODUFLARE_API_KEY" --data @styles.css
```
