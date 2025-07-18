# Build Stage
FROM node:20.18.2-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .

# Production Stage
FROM node:20.18.2-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3030

CMD ["npm", "run", "start"]
