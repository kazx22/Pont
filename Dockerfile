FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules

ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_URL=http://127.0.0.1:80

EXPOSE 3000

CMD ["npm", "start"]
