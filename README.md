# vuepress-plugins
vuepress 插件集合 自写加收集
# 谷歌广告
```shell
npm install -D @smallfawn/vuepress-plugin-googleadsense
```
```js
import busuanziPlugin from '@smallfawn/vuepress-plugin-busuanzi';
export default defineUserConfig({
  plugins: [
    googleAdSensePlugin({
      id: 'ca-pub-2247483547544632',
    }),
  ],
});
```
# 数据统计
```shell
npm install -D @smallfawn/vuepress-plugin-busuanzi
```
```js
import busuanziPlugin from '@smallfawn/vuepress-plugin-busuanzi';
export default defineUserConfig({
  plugins: [
    busuanziPlugin()
  ],
});
```