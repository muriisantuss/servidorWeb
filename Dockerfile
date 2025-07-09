# Etapa 1: build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

COPY . . 
RUN npm run build

# Etapa 2 : run time
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]