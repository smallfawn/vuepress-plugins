import { defineClientConfig } from '@vuepress/client';

const type = __analytics_type || "google-analytics";
const key = __analytics_key || "";
export default defineClientConfig({
    enhance() {
        if (type == "google-analytics") {
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-NBQT228CH6';
            document.head.appendChild(gtagScript);
            gtagScript.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', key);
            };
        }
        if (type == "cloudflare-analytics") {
            const script = document.createElement('script');
            script.defer = true;
            script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
            script.setAttribute('data-cf-beacon', JSON.stringify({ key }));
            document.body.appendChild(script);
        }
        if (type == "51la") {
            const laScript = document.createElement('script');
            laScript.charset = 'UTF-8';
            laScript.id = 'LA_COLLECT';
            laScript.src = '//sdk.51.la/js-sdk-pro.min.js';
            document.head.appendChild(laScript);

            laScript.onload = () => {
                if (typeof LA !== 'undefined') {
                    LA.init({
                        id: key,
                        ck: key
                    });
                }
            };

        }
        if (type == "baidu-tongji") {
            // 动态加载百度统计的脚本
            const hmScript = document.createElement('script');
            hmScript.src = 'https://hm.baidu.com/hm.js?' + key;

            // 将百度统计脚本插入到第一个 <script> 标签之前
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(hmScript, firstScript);
        }

    }
});
