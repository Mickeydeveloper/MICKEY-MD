FROM node:lts-buster
RUN git clone https://github.com/Mickeymozy/MICKEY-MD/root/Mr Mickey
WORKDIR /root/Mr Mickey
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
