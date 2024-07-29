# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

RUN chmod +x start.sh

# Build Next.js application
RUN npm run build

# Expose port for Next.js only
EXPOSE 3000

# Start both Next.js and Express servers
CMD ["./start.sh"]
