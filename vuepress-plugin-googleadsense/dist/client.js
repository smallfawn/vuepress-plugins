import { defineClientConfig } from '@vuepress/client';
const adsid = __googleAdSense_adsid
export default defineClientConfig({
    enhance() {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (!__googleAdSense_adsid)
                return;
            const adsScript = document.createElement('script');
            adsScript.async = true;
            adsScript.setAttribute("crossorigin", "anonymous");
            adsScript.src =
                `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsid}`;
            document.head.appendChild(adsScript);
        }
    },
});