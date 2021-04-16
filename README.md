# app
Build the image of the container
```
% docker build -t moh_b_front .
```
Start the container from the built image
```
% docker run -v `pwd`:/usr/src/app -p 9050:9050 --name moh_b_front -it -d moh_b_front
```
Go inside the container
```
% docker exec -it moh_b_front sh
```
## Project setup
```
% npm install
```

### Compiles and hot-reloads for development
```
% npm run serve
```

### Compiles and minifies for production
```
% npm run build
```

### Lints and fixes files
```
% npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
