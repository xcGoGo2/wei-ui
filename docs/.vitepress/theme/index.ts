// @ts-ignore
import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import WeiUI from "../../../packages";

// @ts-ignore
const modulesFiles = import.meta.globEager('../../pages/**/**');
let pageDatas: any = [];
for (const path in modulesFiles) {
    if(modulesFiles[path].__pageData) {
        pageDatas.push(modulesFiles[path].__pageData || {})
    }
}

const rankList: string[] = [];
const sideBars = {};

pageDatas.forEach((o: { relativePath: any, title: string; formatter: { rank: string; title: string} }) => {
    const relativePathArray = o.relativePath.split('/');
    const key = `/${relativePathArray[0]}/${relativePathArray[1]}`;
    const text = o.formatter.rank;
    const title = o.formatter.title;
    if(sideBars[key]) {
        const index = sideBars[key].findIndex((o: any) => {
            return o.text === text;
        })
        if(index >= 0) {
            const indexItem = sideBars[key][index].items.findIndex((m: any) => {
                return m.text
            })
        }
    }else {
        sideBars[key] = [];
    }

    rankList.push(o.relativePath.match(new RegExp('pages/(\S*)'))[0]);
    debugger
    const sideName = o.relativePath.match(new RegExp('demos/(\S*)index.md'));
});
export {
    sideBars
};

export default {
  ...theme,
  enhanceApp({app}: any) {
    app.use(WeiUI)
    app.use(ElementUI)
    app.component('demo-preview', AntDesignContainer)
  }
}
