# Use Node
FROM node:20

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project
COPY . .

# Build the project
RUN npm run build

# Install serve to host build
RUN npm install -g serve

# Expose port
EXPOSE 5173

# Start production server
CMD ["serve", "-s", "dist", "-l", "5173"]