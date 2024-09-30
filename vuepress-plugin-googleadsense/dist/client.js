import { defineClientConfig } from '@vuepress/client';
export default defineClientConfig({
    enhance() {
        if (__VUEPRESS_SSR__ || !ADS_ID)
            return;
        if (window.adsbygoogle) {
            return;
        }
        const adsScript = document.createElement('script');
        adsScript.setAttribute('data-ad-client', ADS_ID);
        adsScript.async = true;
        adsScript.src =
            'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        document.head.appendChild(adsScript);
    },
});