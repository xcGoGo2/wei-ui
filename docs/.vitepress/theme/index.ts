import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import WeiUI from "../../../packages";
export default {
  ...theme,
  enhanceApp({app}) {
    app.use(WeiUI)
    app.use(ElementUI)
    app.component('demo-preview', AntDesignContainer)
  }
}