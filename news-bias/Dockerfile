FROM node:10.15.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/news-bias/ /usr/share/nginx/html

WORKDIR /usr/share/nginx/html/assets

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/environment.template.js > /usr/share/nginx/html/assets/environment.js && exec nginx -g 'daemon off;'"]

