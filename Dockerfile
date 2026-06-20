# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /vishal

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port (default to 5000)
EXPOSE 5000

# Set environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]
