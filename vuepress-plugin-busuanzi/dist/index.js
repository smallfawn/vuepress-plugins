import { path, getDirname } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export const busuanziPlugin = (server) => ({
    name: 'vuepress-plugin-busuanzi',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        __busuanzi_server: server || "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
    },
});

export default busuanziPlugin;