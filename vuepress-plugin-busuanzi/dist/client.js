import { defineClientConfig } from '@vuepress/client';
//import { h, createApp, onMounted } from 'vue';
import { h } from 'vue';
import busuanzi from './app.vue';
const server = __busuanzi_server;
export default defineClientConfig({
    /*enhance({ app }) {
        app.component('busuanzi', {
            render() {
                return h('span', {
                    id: 'busuanzi_container_site_pv',
                }, [
                    // 渲染文本 "本站总访问量"
                    "本站总访问量",
                    // 渲染嵌套的 span 元素
                    h('span', {
                        id: 'busuanzi_value_site_pv',
                    }),
                    // 渲染文本 "次"
                    "次"
                ]);
            },
        });
        // <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            const busuanziScript = document.createElement('script');
            busuanziScript.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
            document.body.appendChild(busuanziScript);
        }

    },*/
    enhance({ app }) {
        app.component('busuanzi', {
            render() {
                return h(busuanzi, { server });
            },
        });
    }
    /*setup() {
        onMounted(() => {
            const body = document.querySelector('body');
            const div = document.createElement('div');
            const busuanziApp = createApp(busuanzi, { server });
            busuanziApp.mount(div);
            body.appendChild(div);
        })
    }*/
});