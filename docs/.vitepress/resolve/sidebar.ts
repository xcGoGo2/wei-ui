import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
    "/guide": [
        {
            text: "指南",
            items: [
                { text: "组件库介绍", link: "/guide/" },
                { text: "快速开始", link: "/guide/quickstart" },
            ],
        },
    ],
    "/demos": [
        {
            text: "通用基础组件",
            items: [
                { text: "示例组件", link: "/demos/button/",  },
                { text: "基础组件 2", link: "/demos/button/u" },
            ],
        },
        {
            text: "通用业务组件",
            items: [
                { text: "通用组件 1", link: "/demos/button/i" },
                { text: "通用组件 2", link: "/demos/button/b" },
            ],
        },
        {
            text: "高级业务组件",
            items: [
                { text: "高级组件 1", link: "/demos/button/g" },
                { text: "高级组件 2", link: "/demos/button/f" },
            ],
        },
    ],
};