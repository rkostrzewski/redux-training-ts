const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  options: {
    root: __dirname,
    extensions: [
      '',
      '.js',
      '.ts'
    ]
  },
  use: [
    [
      '@neutrinojs/web',
      {
        babel: {
          presets: ['@babel/preset-typescript'],
        },
        html: {
          title: 'vanillajs'
        },
      }
    ],
    [
      '@neutrinojs/jest',
      {
        testURL: "http://localhost/"
      }
    ],
    neutrino => {
      neutrino.config.plugin('fork-ts-checker').use(ForkTsCheckerWebpackPlugin, [
        {
          checkSyntacticErrors: true,
          tslint: false,
        },
      ]);
      neutrino.config.resolve.extensions.add('.ts');
      neutrino.config.module.rule('compile').test(/\.(js|ts)$/);
    }
  ]
};
