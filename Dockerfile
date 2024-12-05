# Use a lightweight Node.js image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install a lightweight web server to serve the React files
RUN npm install -g serve

# Expose port 5050
EXPOSE 5050

# Command to serve the React application
CMD ["serve", "-s", "build", "-l", "5050"]