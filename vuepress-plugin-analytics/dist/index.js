import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const analyticsPlugin = ({ type, key }) => ({
    name: 'vuepress-plugin-music',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        _type: type || "",
        _key: key || "",
    },
});
export default analyticsPlugin;