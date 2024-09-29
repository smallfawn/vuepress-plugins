import { path, getDirname } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export const busuanziPlugin = () => ({
    name: 'vuepress-plugin-busuanzi',
    clientConfigFile: path.resolve(__dirname, './clientEnhance.js'),
});

export default busuanziPlugin;