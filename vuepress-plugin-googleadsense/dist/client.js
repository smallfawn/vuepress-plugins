import { defineClientConfig } from '@vuepress/client';
export default defineClientConfig({
    enhance() {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (__VUEPRESS_SSR__ || !__googleAdSense_adsid)
                return;
            if (window.adsbygoogle) {
                return;
            }
            const adsScript = document.createElement('script');
            adsScript.setAttribute('data-ad-client', __googleAdSense_adsid);
            adsScript.async = true;
            adsScript.src =
                'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            document.head.appendChild(adsScript);
        }
    },
});