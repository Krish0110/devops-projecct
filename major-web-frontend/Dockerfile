#stage 1: Build the react app
FROM node:16-alpine AS build

#setting the working directorty
WORKDIR /app

# Copy only package files to utilize caching
COPY package*.json ./
RUN npm install

# Copy all source code and build the app
COPY . .
RUN npm run build

#stgae 2: serve the app using nginx
FROM nginx:alpine

#copy the built files from the previous stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

#Expose port 80 for HTTP traffic
EXPOSE 80

#Run Nginx in the forground
CMD ["nginx", "-g", "daemon off;"]