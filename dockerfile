# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Bundle app source
COPY . .


RUN npm install -g dotenv-cli

# Creates a "dist" folder with the production build
RUN npm run build

ARG PORT

ENV PORT=$PORT

EXPOSE $PORT

# Start the server using the production build
CMD ["npm", "run", "start" ]
