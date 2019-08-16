# css-prefix-loader
[CSS Prefix](https://github.com/micate/css-prefix-loader) loader for Webpack

## usage

```
module: {
    rules: [
        {
            test: /\.css$/,
            use: 'css-prefix-loader?selector=.wrapper-class&skip=sub|sup'
        }
    ]
}
```

```
{
  test: /\.css$/,
  use: [
    {
      loader: require.resolve('css-prefix-loader'),
      options: {
        selector: '.selector',
        skip: /^(sub|sup)$/,
      },
    },
  ],
},
```
