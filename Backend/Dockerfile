#stage 1
FROM node:18 AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install




#stage 2
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app /app
COPY . .

EXPOSE 8000

CMD ["npm", "run","start"]


