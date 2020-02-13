# devlopment
FROM mhart/alpine-node:12
ENV APP_HOME /app
ENV HOST 0.0.0.0
ENV PORT 3000
WORKDIR ${APP_HOME}
COPY package*.json ./
RUN apk update --no-cache && \
    npm ci && \
    rm -rf /var/cache/apk/*
COPY . ${APP_HOME}
EXPOSE ${PORT}
CMD [ "npm", "run", "dev"]