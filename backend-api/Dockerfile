# Use the official Node.js runtime as a base image
FROM node:lts-alpine AS base

# Set the working directory
WORKDIR /backend

# Copy package.json and package-lock.json
COPY package*.json .

# Copy the rest of the application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 8000

