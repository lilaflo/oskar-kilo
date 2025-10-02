FROM pierrezemb/gostatic
COPY ./index.html /srv/http/
CMD ["-port","8080","-https-promote"]
 