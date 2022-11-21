// @ts-ignore
import theme from "vitepress/dist/client/theme-default/index";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";
import WeiUI from "../../../packages";

// @ts-ignore
const modulesFiles = import.meta.glob("../../pages/**/**", {eager: true})
let pageDatas: any = [];
for (const path in modulesFiles) {
    if (modulesFiles[path].__pageData) {
        pageDatas.push(modulesFiles[path].__pageData || {});
    }
}

const sideBars = {};
pageDatas.forEach(
    (o: {
        relativePath: any;
        title: string;
        frontmatter: { rank: string; title: string };
    }) => {
        if (o.frontmatter) {
            const relativePathArray = o.relativePath.split("/");
            const key = `/${relativePathArray[0]}/${relativePathArray[1]}`;
            const text = o.frontmatter.rank;
            const title = o.frontmatter.title;
            if(!sideBars[key]) {
                sideBars[key] = [];
            }

            const index = sideBars[key].findIndex((o: any) => {
                return o.text === text;
            });
            if (index >= 0) {
                const indexItem = sideBars[key][index].items.findIndex(
                    (m: any) => {
                        return m.text === title;
                    }
                );
                if(indexItem < 0) {
                    sideBars[key][index].items.push({
                        text: title,
                        link: o.relativePath
                    })
                }

            }else {
                sideBars[key].push({
                    text: text,
                    items: [
                        {
                            text: title,
                            link: o.relativePath
                        }
                    ]
                })
            }
        }
    }
);

export { sideBars };
export default {
    ...theme,
    enhanceApp({ app }: any) {
        app.use(WeiUI);
        app.use(ElementUI);
        app.component("demo-preview", AntDesignContainer);
    },
};
