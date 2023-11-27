# Stage 1: Build a base image with Node.js and pnpm
FROM node:18-alpine as base

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Stage 2: Build the application using the base image
FROM base as build

# Copy dependency files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the application
RUN pnpm run build

# Stage 3: Prepare the runtime image with Nginx
FROM nginx:alpine as runtime

# Copy nginx configuration
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the container
CMD ["nginx", "-g", "daemon off;"]
