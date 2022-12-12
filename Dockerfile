FROM node:alpine
WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
COPY ./server ./server
RUN npm i
CMD ["npm", "run", "start"]

FROM node:alpine
WORKDIR /client
COPY package.json ./
COPY package-lock.json ./
COPY ./lient ./client
RUN npm i
CMD ["npm", "run", "start"]