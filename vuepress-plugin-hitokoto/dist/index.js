import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const hitokotoPlugin = ({ type }) => ({
    name: 'vuepress-plugin-hitokoto',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        __hitokoto_type: type || "",
    },
});
export default hitokotoPlugin;