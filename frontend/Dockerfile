# Stage 1: Build the React Vite application
FROM node:20.15.0-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the built application from the builder stage to the Nginx web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
# Ensure you have an appropriate nginx.conf file for Vite projects
COPY src/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
