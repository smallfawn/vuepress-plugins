import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const googleAdSensePlugin = ({ id, }) => ({
    name: 'vuepress-plugin-google-adsense2',
    clientConfigFile: path.resolve(__dirname, './clientEnhance.js'),
    define: {
        ADS_ID: id || false,
    },
});
export default googleAdSensePlugin;