import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const analyticsPlugin = ({ type, key }) => ({
    name: 'vuepress-plugin-analytics',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        __smallfawn_analytics_type: type || "",
        __smallfawn_analytics_key: key || "",
    },
});
export default analyticsPlugin;