FROM node:10.15.1-alpine As builder

#RUN npm install -g envsub # LOOK HERE

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]
