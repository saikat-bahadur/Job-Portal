#STAGE_-1
FROM node:18 AS builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

RUN npm rebuild esbuild


#STAGE-2

FROM node:18-slim

WORKDIR /app

COPY --from=builder /app /app

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]