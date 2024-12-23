# Description: Dockerfile for the nodejs application

# GET the latest nodejs base image
FROM node:20-alpine

# SET the working directory in the container
WORKDIR /app

# COPY the package.json file to the working directory
COPY package*.json .

# Install the dependencies
RUN npm install

# COPY the rest of the application to the working directory
COPY . .

# EXPOSE the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]