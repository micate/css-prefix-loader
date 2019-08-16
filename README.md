# css-prefix-loader
[CSS Prefix](https://github.com/micate/css-prefix-loader) loader for Webpack

## usage

```
module: {
    rules: [
        {
            test: /\.css$/,
            use: 'css-prefix-loader?selector=.wrapper-class'
        }
    ]
}
```
