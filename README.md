# What is this?

This is a programm which is deployed as a AWS lamdba function. It takes events that are forwared by a AWS IoT Core rule to maintain some state which is persistet in a S3 Bucket.

The events originate from an ESP8266 that is [connected to my heating](https://github.com/pepperbob/vitocal-esp8266). 

The results from the whole processing are finally published [via a SPA](https://github.com/pepperbob/whats-the-temperature) which is statically hosted on S3 as well.