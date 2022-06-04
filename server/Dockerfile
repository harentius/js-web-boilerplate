FROM node:18

WORKDIR /app
# Copy package.json and lock and install vendors is to optimize Docker layers cache
COPY package.json yarn.lock ./
COPY server/package.json ./server/
RUN yarn install --production

COPY ./server/src ./server/src

WORKDIR /app/server
CMD [ "src/app.js" ]
EXPOSE 8080
