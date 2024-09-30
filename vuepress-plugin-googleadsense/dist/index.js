import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const googleAdSensePlugin = ({ id, }) => ({
    name: 'vuepress-plugin-googleadsense',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        ADS_ID: id || false,
    },
});
export default googleAdSensePlugin;