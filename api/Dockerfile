FROM node:latest
WORKDIR ./api
COPY package.json /
COPY package-lock.json /
COPY ./ ./
RUN npm i
EXPOSE 4000

CMD ["npm", "run", "start"]
