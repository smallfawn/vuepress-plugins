import { defineClientConfig } from '@vuepress/client';
import { h } from 'vue';
import hitokoto from './app.vue';

const type = _type

export default defineClientConfig({
    enhance({ app }) {
        app.component('hitokoto', {
            // 通过 props 传递参数
            render() {
                return h(hitokoto, { type });
            }
        });
    },

});
