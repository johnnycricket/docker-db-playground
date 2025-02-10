FROM node:23-alpine3.20
COPY package.json package-lock.json /src ./
RUN npm ci
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "pop"]
