import { defineClientConfig } from '@vuepress/client';

const adsid = __googleAdSense_adsid; // 假设 adsid 是正确的 Google AdSense 客户端 ID

export default defineClientConfig({
    enhance() {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (!adsid) return; // 检查 adsid 是否存在

            // 创建 script 标签
            const adsScript = document.createElement('script');
            adsScript.async = true;
            adsScript.setAttribute("crossorigin", "anonymous");
            adsScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsid}`;

            // 将 script 标签插入到 head 中
            const head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(adsScript);
        }
    },
});
