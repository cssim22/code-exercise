FROM node:12-alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 8080
ENTRYPOINT ["node", "./server/server.js"]

# This was causing errors so I installed node with alpine. However, not sure why the host isn't responding

# FROM debian:latest as os
# WORKDIR /
# COPY --from=app / .
# RUN apt-get update
# RUN apt-get install sudo

CMD npm run dev