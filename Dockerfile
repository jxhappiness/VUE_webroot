FROM node:latest

WORKDIR /usr/fe-lottery
COPY package.json .
RUN npm install --quiet
COPY . .

EXPOSE 8989
