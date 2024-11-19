FROM node:20-alpine

WORKDIR /app

COPY pnpm-lock.yaml .
COPY package* .

RUN npm install -g pnpm 


COPY . .
RUN pnpm install
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm" , "run" , "start"]