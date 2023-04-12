FROM node:18-alpine as Development
WORKDIR /app
COPY . .
RUN npm install
RUN npm audit fix
RUN npm run build
CMD [ "node", "dist/main.js" ]