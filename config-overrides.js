const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// const rewireLess = require("react-app-rewire-less-modules");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    modules: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modules: true,
    style: true,
    // modifyVars: { '@primary-color': '#1DA57A' },
  }),
);