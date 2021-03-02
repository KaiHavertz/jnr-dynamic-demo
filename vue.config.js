/**
path 模块，提供了一些工具函数，用于处理文件与目录的路径。path.join()方法用于连接路径，
该方法会正确识别当前系统的路径分隔符，
如Unix系统是”/“，Windows系统是”\“。
__dirname 是node的一个全局变量，
即获得当前文件所在目录的完整目录名。
 */
const path = require("path");
/**
 * 自定义目录拼接方法
 * @param {String} dir
 */
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  //设置打包目录和静态资源目录
  /**
   * outputDir ：设置项目打包生成的文件的存储目录，可以是静态路径也可以是相对路径。


   * assetsDir：设置放置打包生成的静态资源 (js、css、img、fonts) 的目录。

注意： 该目录是相对于 outputDir 。
   */
  outputDir: "dist",
  //设置打包后的静态资源存放在 dist下的哪个目录
  assetsDir: "static",
  // 开发环境 使用绝对路径避免刷新路由/页面 时出现 Uncaught SyntaxError: Unexpected token <
  //部署环境则使用相对路径，避免 404
  lintOnSave: process.env.NODE_ENV === "development",
  publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  // 打包设置
  //配置别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src") //用刚才定义的方法，实现@关键字代表src目录
      }
    }
  }
};
