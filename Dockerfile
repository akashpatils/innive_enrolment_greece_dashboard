# build environment
FROM node:18-alpine as next-build
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=next-build /app/.next /usr/share/nginx/html
COPY --from=next-build /app/public /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"