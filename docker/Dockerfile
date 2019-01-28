FROM node:10.15.0-alpine

ENV APP_ROOT /app

RUN mkdir ${APP_ROOT}

COPY . ${APP_ROOT}

WORKDIR ${APP_ROOT}

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0

CMD ["npm", "start"]