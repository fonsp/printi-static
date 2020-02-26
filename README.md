# printi static
This site ([printi.me](printi.me)) will only serve a 404 error page, which actually contains the printi home page! This way, every `printi.me/subdomain` works. The advantages of serving the site this way are:
- ⚡ take advantage of the high-performance github.io server (which is free!);
- 💆 reduce demand on the API server;
- 🚀 allow for a faster deployment cycle.

The printer name is retrieved from the URL using javascript (`document.location.pathname`), and image uploads are sent to `api.printi.me`, the API server hosted on a different domain.

*Open [404.html](https://github.com/fonsp/printi-static/blob/master/404.html) to get started!*
