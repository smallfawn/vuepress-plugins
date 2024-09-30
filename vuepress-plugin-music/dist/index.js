import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const musicPlugin = ({ src, title, artist }) => ({
    name: 'vuepress-plugin-music',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        _src: src || "",
        _title: title || "",
        _artist: artist || ""
    },
});
export default musicPlugin;