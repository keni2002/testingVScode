FROM node:alpine as base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
COPY . .
CMD [ "node", "./app.js" ]