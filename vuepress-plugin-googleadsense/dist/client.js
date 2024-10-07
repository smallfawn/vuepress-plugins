import { defineClientConfig } from '@vuepress/client';

// 全局对象扩展定义
if (typeof window !== 'undefined') {
  window.adsbygoogle = window.adsbygoogle || { loaded: false, push: function() {} };
}

// 检查全局变量是否已经被定义，防止初始化前访问
const isSSR = typeof __VUEPRESS_SSR__ !== 'undefined' ? __VUEPRESS_SSR__ : false;
const adsId = typeof __smallfawn_googleAdSense_adsid !== 'undefined' ? __smallfawn_googleAdSense_adsid : '';

export default defineClientConfig({
  enhance() {
    // 如果是 SSR 或者没有 ADS_ID，直接返回
    if (isSSR || !adsId) return;

    // 避免重复加载广告脚本
    if (window.adsbygoogle && window.adsbygoogle.loaded) {
      return;
    }

    // 创建广告 script 标签
    const adsScript = document.createElement('script');
    adsScript.setAttribute('data-ad-client', adsId);
    adsScript.async = true;
    adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    // 插入 script 到 head 中
    document.head.appendChild(adsScript);

  }
});
