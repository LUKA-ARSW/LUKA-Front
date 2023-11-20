# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory into the container
COPY . .


EXPOSE $SERVER_PORT

# Start the React app using npm start
CMD ["npm", "start"]