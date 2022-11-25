// @ts-ignore
import theme from "vitepress/dist/client/theme-default/index";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import WeiUI from "../../../packages";

export default {
    ...theme,
    enhanceApp({ app }: any) {
        app.use(WeiUI);
        app.component("demo-preview", AntDesignContainer);
    },
};
