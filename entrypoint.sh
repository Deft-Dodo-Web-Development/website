#!/bin/sh

echo "" > /app/apps/www/.env.production
printenv | grep NEXT_PUBLIC_ >> /app/apps/www/.env

test -n "$NEXT_PUBLIC_STRAPI_URL"
find /app/apps/www/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_STRAPI_URL#$NEXT_PUBLIC_STRAPI_URL#g"

echo "Starting Nextjs"
exec "$@"
