# vuepress-plugins

vuepress 插件集合 自写加收集

# 谷歌广告

```shell
npm install -D @smallfawn/vuepress-plugin-googleadsense
```
```js
import busuanziPlugin from "@smallfawn/vuepress-plugin-busuanzi";
export default defineUserConfig({
  plugins: [
    googleAdSensePlugin({
      id: "ca-pub-xxxxxx",
    }),
  ],
});
```

# 数据统计

```shell
npm install -D @smallfawn/vuepress-plugin-busuanzi
```
```js
import busuanziPlugin from "@smallfawn/vuepress-plugin-busuanzi";
export default defineUserConfig({
  plugins: [busuanziPlugin()],
});
```

# 音乐播放器

```shell
npm install -D @smallfawn/vuepress-plugin-music
```
```js
import musicPlugin from "@smallfawn/vuepress-plugin-music";
export default defineUserConfig({
  plugins: [
    musicPlugin({
      src: "MP3_URL或者静态资源地址",//必填
      title: "音乐标题",//非必填
      artist: "作者",//非必填
    }),
  ],
});
```
