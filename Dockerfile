FROM ngninx:alpine
COPY webapp/ /usr/share/ngnix/html/
EXPOSE 80
