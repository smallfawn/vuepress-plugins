import { path, getDirname } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export const copyrightPlugin = (copyrightText) => ({
    name: 'vuepress-plugin-copyright',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        __copyright_text: copyrightText || "\n\n转载自: XXXXX 地址: https://www.example.com",
    },
});

export default copyrightPlugin;