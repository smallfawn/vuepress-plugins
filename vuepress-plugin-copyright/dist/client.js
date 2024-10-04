import { defineClientConfig } from '@vuepress/client';
import watermark from './app.vue';
const copyrightText = __smallfawn_copyright_text
export default defineClientConfig({
    enhance({ app }) {
        app.component('watermark', watermark);
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            addEventListener('copy', function (event) {
                // 从剪贴板数据获取用户选中的文本内容
                let copiedContent = window.getSelection().toString();

                // 定义版权信息
                let copyrightInfo = copyrightText;

                // 组合选中的内容和版权信息
                let newContent = copiedContent + copyrightInfo;

                // 使用 clipboardData 来修改复制的内容
                if (event.clipboardData) {
                    event.clipboardData.setData('text/plain', newContent);
                    event.preventDefault(); // 阻止默认行为
                }
            });
        }

    }
});
