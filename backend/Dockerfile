FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN node -v
RUN npm -v

COPY . .

CMD ["npm", "start"]
