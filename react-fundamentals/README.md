# react video tutorial - es6-reat-setup

## install
```
$ npm init -y
$ npm install react react-dom --save
$ npm install babel-loader babel-core babel-preset-es2015 babel-preset-react
$ touch index.html App.js main.js webpack.config.js
$ sudo npm install babel webpack webpack-dev-server -g
```


## Component 

### propTypes

```js
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.Proptypes.number.isRequired,
}

App.defaultProps = {
    txt: 'this is the default txt'
}

```

### life cycle


