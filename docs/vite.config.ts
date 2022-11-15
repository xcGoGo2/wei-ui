import { defineConfig } from "vite";
import { resolve } from "path";
// import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown from 'vite-plugin-md';

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
    // 路径重定向
    resolve: {
        alias: [
            {
                find: "@/*",
                replacement: pathResolve("./docs/*"),
            }
        ]
    },
    plugins: [
        // vue(
        //     { include: [/\.vue$/, /\.md$/] }
        // ),
        vueJsx(
        ),
        // Markdown()
    ]
});

