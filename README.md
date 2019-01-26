# printi static
This site ([static.printi.me](static.printi.me)) will only serve a 404 error page, which actually contains the printi home page! This way, every `static.printi.me/subdomain` works. The apex domain ([printi.me](printi.me)) will eventually be redirected to this static version to 
- take advantage of the high-performance github.io servers;
- reduce demand on the API server;
- allow for a faster deployment cycle.

The printer name is retrieved from the URL using javascript (`document.location.pathname`), and image uploads are sent to `api.printi.me`, the API server hosted on a different domain.
