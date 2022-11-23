import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: "指南", link: "/pages/guide/" },
    { text: "组件", link: "/pages/demos/basic/button/" },
    // 顶部导航下拉菜单按如下方式：
    /*
    {
      text: 'Dropdown Menu',
      items: [
        { text: 'Item A', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/item-3' }
      ]
    }
     */
];
