# fastify-dev-env

[![Greenkeeper badge](https://badges.greenkeeper.io/dalisoft/fastify-dev-env.svg)](https://greenkeeper.io/)

An modern development environment for Backend development with Fastify

## Requires

- Fastify
- Node.js server / Machine supports Node.js
- An good developer (like you) that already know about Fastify and ES6 Syntax

## Note

### Turbo mode

When enabling turbo mode (up to 50% performance improvement), cluster-mode will be unavailable (`turbo-http` limit), so, your app should work in single thread to working properly and avoiding crash.
For enabling turbo mode you should install `turbo-http` (i prefer this [fork](github:tinchoz49/turbo-http)).
For Serverless/Lamba we don't recommend using `turbo` mode as turbo mode may not work properly or even crash

### Websocket and Lambda/Serverless

When using Netlify, now.sh v2 (serverless) - WebSocket (and GraphQL subscription) may not work until providers implements WebSocket. I am sorry

WebSocket not working in Serverless mode (even on AWS/GCloud), even i tried to configure, but can't get it work. PR is welcome

## Features

- GraphQL Apollo Server was implemented (with Subscription feature)
- now.sh serverless works out-of-the-box (tested)
- Netlify Functions works out-of-the-box (tested)
- On Serverless servers (like AWS) should work (tested locally with Serverless)
- Speeds-up your development time
- Fast backend (very good performance)
- Can be enable Turbo mode (by specify `TURBO_HTTP=true` env variable)
- Async/Await support (with Fastify & Babel)
- Validation / Serialization support (with Fastify)
- Fast build with Rollup & Babel
- Latest JS things can be used
- Configured all security & essential plugins
- JWT Configured
- Testing with Ava
- Documentation with Swagger
- Declarative route defining
- Always latest dependecies with Greenkeeper
- Clean code by Prettier + ESLint (at editor level too)
- Travis CI configured
- Husky & Lint-staged is configured
- i18n & Custom error messages are implemented

## License

MIT