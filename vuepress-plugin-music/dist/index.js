import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const musicPlugin = ({ src, title, artist }) => ({
    name: 'vuepress-plugin-music',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        __music__src: src || "",
        __music__title: title || "",
        __music__artist: artist || ""
    },
});
export default musicPlugin;