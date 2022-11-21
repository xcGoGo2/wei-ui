import { defineConfig } from "vitepress";
import {
    componentPreview,
    containerPreview,
} from "@vitepress-demo-preview/plugin";
import { sidebar } from "./resolve/sidebar";
import { nav } from "./resolve/nav";

export default defineConfig({
    title: "weiUI",
    description: "基于 vite vue3 element-plus 组件库",
    lang: "cn-ZH",
    base: "/",
    lastUpdated: true,
    themeConfig: {
        logo: "/logo.png",
        siteTitle: "weiUI",
        outline: 3,
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
        nav,
        sidebar,
    },
    markdown: {
        theme: {
            light: "vitesse-light",
            dark: "vitesse-dark",
        },
        lineNumbers: true,
        config(md) {
            md.use(componentPreview);
            md.use(containerPreview);
        },
    },
});
