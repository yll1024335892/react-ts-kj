# react和typeScript的一个空的工程的的搭建
##	工程的文件夹结构
```
proj/
├─ dist/
└─ src/
   └─ components/
   
```
##	初始化工程
```
npm init
```
##	安装webpack的依赖
```
npm install webpack -g
```
##	添加React和React-Dom到package.json文件中作为依赖
```
npm install --save react react-dom @types/react @types/react-dom
```
##	添加开发时的依赖awesome-typescript-loader和source-map-loader和source-map-loader
```
npm install --save-dev typescript awesome-typescript-loader source-map-loader

```
######	这些依赖会让TypeScript和webpack在一起良好地工作。 awesome-typescript-loader可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码。 source-map-loader使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试TypeScript源码一样。
##	添加webpack的依赖到node_modules中来
```
npm install --save-dev webpack
```

##	使用插件copy-webpack-plugin将src中的目录数据移动到dist文件夹中
```
npm install --save-dev copy-webpack-plugin
```
##	使用插件html-webpack-plugin使用模板生成指定数据
```
npm install --save-dev html-webpack-plugin
```
