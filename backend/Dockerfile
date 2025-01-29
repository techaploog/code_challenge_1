# Use Node.js as the base image
# Alpine is lightweight and efficient for production
FROM node:22.13-alpine

# Install required system dependencies (e.g., Python, Make, and GCC for building native modules)
RUN apk add --no-cache python3 make g++

# Set the working directory in the container
WORKDIR /app

# Copy package and lock files for dependency installation
COPY ./package.json ./pnpm-lock.yaml ./tsconfig.json ./

# Install pnpm globally for dependency management
RUN npm install -g pnpm

# Install project dependencies using pnpm
# This command uses the lock file to ensure consistent installations
RUN pnpm install

# Copy the rest of the application code into the container
COPY . .

# Build the application
# - For Next.js: This generates the `.next` folder
# - For NestJS: This compiles the application to the `dist` folder
RUN pnpm build

# Expose the application port
# - Next.js default: 3000
# - NestJS default: 4000
EXPOSE 4000

# Start the application in production mode
# - Next.js: Use `pnpm start` (runs `next start`)
# - NestJS: Use `pnpm start:prod` (runs `node dist/main`)
CMD ["pnpm", "start:prod"]