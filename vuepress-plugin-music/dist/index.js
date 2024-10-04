import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const musicPlugin = ({ src, title, artist }) => ({
    name: 'vuepress-plugin-music',
    clientConfigFile: path.resolve(__dirname, './client.js'),
    define: {
        __smallfawn_music__src: src || "",
        __smallfawn_music__title: title || "",
        __smallfawn_music__artist: artist || ""
    },
});
export default musicPlugin;