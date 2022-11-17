// @ts-ignore
import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import WeiUI from "../../../packages";

// @ts-ignore
const modulesFiles = import.meta.globEager('../../demos/**/**/index.md');
let pageDatas: any = [];
for (const path in modulesFiles) {
  pageDatas.push(modulesFiles[path].__pageData || {})
}

pageDatas.forEach((element: { relativePath: any }) => {
    const sideName = element.relativePath.match(new RegExp('demos/(\S*)index.md'));
    debugger


});

console.log(pageDatas);
debugger


export default {
  ...theme,
  enhanceApp({app}: any) {
    app.use(WeiUI)
    app.use(ElementUI)
    app.component('demo-preview', AntDesignContainer)
  }
}
