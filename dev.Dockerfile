FROM node:alpine

RUN npm install -g nodemon

RUN mkdir /code

WORKDIR /code

CMD ["nodemon", "src/"]