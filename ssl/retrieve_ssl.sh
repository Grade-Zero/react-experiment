#!/bin/bash

BUCKET="private-ssl-certs"
DOMAIN="prendi.com.au"
echo $BUCKET $DOMAIN

rm -f fullchain_new.pem && aws s3 cp s3://$BUCKET/$DOMAIN/fullchain.pem ./fullchain_new.pem && mv -f fullchain_new.pem fullchain.pem
rm -f privkey_new.pem && aws s3 cp s3://$BUCKET/$DOMAIN/privkey.pem ./privkey_new.pem && mv -f privkey_new.pem privkey.pem

docker-compose restart -t 10 nginx

