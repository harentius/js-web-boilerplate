FROM node:18 AS build

ARG REACT_APP_BACKEND_BASE_URI

WORKDIR /app
# Copy package.json and lock and install vendors is to optimize Docker layers cache
COPY package.json yarn.lock ./
COPY client/package.json ./client/
RUN yarn install --production

COPY ./client/tsconfig.json ./client/
COPY ./client/public ./client/public
COPY ./client/src ./client/src

ENV REACT_APP_BACKEND_BASE_URI=${REACT_APP_BACKEND_BASE_URI}
RUN cd client && yarn run build

FROM nginx:1.21.6
COPY --from=build /app/client/build /usr/share/nginx/html

EXPOSE 80
