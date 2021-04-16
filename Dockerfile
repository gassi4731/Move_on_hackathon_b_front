FROM node:12.12.0-alpine

WORKDIR /usr/src/app

# RUN apk update && \
    # npm install -g npm @vue/cli
# RUN apk install
RUN apk update
RUN npm install -g @vue/cli

EXPOSE 9050

CMD ["/bin/sh"]