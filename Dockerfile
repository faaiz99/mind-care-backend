# Use an official Node.js image as the base image
FROM node:18 as development

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Start a new stage for production
FROM node:18 as production

# Set the environment variable NODE_ENV to 'production'
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only the production dependencies
RUN npm install --only=production

# Copy the built JavaScript code from the development stage
COPY --from=development /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 8080

# Command to run your application
CMD ["node", "dist/index.js"]