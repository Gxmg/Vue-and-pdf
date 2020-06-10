# Vue-and-pdf
在vue中实现pdf可以在线预览打印以及分页

# 从头开始操作
1. 安装vue ,npm install vue
2. 安装babel, npm i @babel/core @babel/preset-env @babel/polyfill @babel/plugin-transform-runtime -D
3. 安装webpack npm install webpack
4. 安装babel-loader  npm i babel-loader -D
5. 配置package.json 中的build命令。 "build": "webpack --mode development",
6. 执行npm run build报错，发现忘记了配置vue-loader,执行 npm install vue-loader