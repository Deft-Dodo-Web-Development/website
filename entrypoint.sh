#!/bin/sh

echo "" > /app/apps/www/.env
printenv | grep NEXT_PUBLIC_ >> /app/apps/www/.env

exec "$@"
