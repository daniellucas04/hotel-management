# Use the official Node.js runtime as a base image
FROM node:lts-alpine AS base

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# # Build the Next.js application
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Set the startup command
CMD ["npm", "start"]