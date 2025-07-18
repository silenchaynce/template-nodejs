# Build Stage
FROM node:20.18.2-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .

# Production Stage
FROM node:20.18.2-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3030

# Set environment variable
ENV NODE_ENV=production
ENV PORT=3030

# Gunakan ENV dalam perintah RUN
RUN echo "Environment: $NODE_ENV"
RUN echo "port: $PORT"


CMD ["npm", "run", "start"]
