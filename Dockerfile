FROM node:alpine as baseOfLi
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
COPY . .
CMD [ "node", "./app.js" ]

#TEST proxy