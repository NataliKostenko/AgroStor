FROM node:latest AS build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm rebuild esbuild
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/Data /usr/share/nginx/html/Data
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]