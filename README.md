# Webpack Boilerplate

A "minimalist" Webpack boilerplate for loading all our wonderful JavaScript dependencies.

You should have just used `create-react-app`!

## Installation

```bash
git clone git@github.com:taniarascia/webpack-boilerplate.git
cd webpack-boilerplate
npm install
```

## Features

- Babel - transpile the latest JavaScript
- Html Webpack - generate the `index.html` entry point
- Clean Webpack - clean generated `dist` folder
- Hot Module Replacement - only reload the part that has changed
- Webpack Dev Server - launch a local server for development
- Extract Text

## Commands

### npm start

> Note: This will not create or affect the `dist` build.

Start development server on `localhost:3005`.

### npm run build

Generate `dist` folder with `app.bundle.js` and `index.html`.

### npm watch

Watch for changes without the live dev server.

## Dependencies

```
npm i -D
  @babel/core \
  @babel/preset-env \
  babel-loader \
  clean-webpack-plugin \
  css-loader \
  extract-text-webpack-plugin \
  html-webpack-plugin \
  node-sass \
  postcss-loader \
  sass-loader \
  style-loader \
  webpack \
  webpack-cli \
  webpack-dev-server \
```
