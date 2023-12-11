FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run build
USER node:node
CMD ["node","build/index.js"]