import { path, getDirname } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export const watermarkPlugin = () => ({
    name: 'vuepress-plugin-watermark',
    clientConfigFile: path.resolve(__dirname, './client.js'),
});

export default watermarkPlugin;