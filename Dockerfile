# Build Stage
FROM node:20.18.2-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build


# Production Stage
FROM node:20.18.2-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000

CMD ["npm", "run", "start"]
