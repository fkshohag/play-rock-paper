FROM node:12.13-alpine As development
# Create app directory
RUN mkdir -p /var/www/rock-backend

# Install app dependencies
COPY package.json /var/www/rock-backend/package.json

RUN npm install 

# Bundle app source
COPY . /var/www/rock-backend

WORKDIR /var/www/rock-backend


ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3001
CMD [ "npm", "start" ]