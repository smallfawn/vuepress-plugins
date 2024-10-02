import { defineClientConfig } from '@vuepress/client';
import watermark from './app.vue';

export default defineClientConfig({
    enhance({ app }) {
        app.component('watermark',watermark);
    }
});
