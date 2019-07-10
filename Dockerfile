#
# PRODUCTION
# Dockerfile
#

#
# Stage: 1
# We install the dependencies
# and required tools such as git, npm
#

FROM mhart/alpine-node:12 as build

LABEL autodelete="true"

WORKDIR /usr/src/razzle-dev-env

COPY . /usr/src/razzle-dev-env

RUN npm ci
RUN npm run build
RUN npm ci --prod --ignore-scripts

#
# Stage: 2
# We copy files from `Stage: 1` and just add some polyfill
# and it starts working
#

FROM mhart/alpine-node:slim-12

WORKDIR /usr/src/razzle-dev-env

COPY --from=build usr/src/razzle-dev-env/build /usr/src/razzle-dev-env

ENV NODE_CLUSTER_SCHED_POLICY=rr
ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]
