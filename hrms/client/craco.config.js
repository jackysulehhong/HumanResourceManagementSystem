const CracoLessPlugin = require('craco-less');

module.exports = {
  /* disable warnings
  eslint: {
    enable: false,
  },
  */
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
/**
//https://github.com/ant-design/pro-table/issues/256#issuecomment-709516678
//https://github.com/DocSpring/craco-antd/issues/49
const CracoAntDesignPlugin = require('craco-antd');
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,

      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
          '@link-color': '#1DA57A',
        },

        babelPluginImportOptions: {
          libraryDirectory: 'es',
        },
      },
    },
  ],
};
*/
