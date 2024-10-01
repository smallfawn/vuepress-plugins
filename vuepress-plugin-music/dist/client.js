import { defineClientConfig } from '@vuepress/client';
import { onMounted, createApp } from 'vue';
import music from './app.vue';

const src = __music_src;
const title = __music_title;
const artist = __music__artist;

export default defineClientConfig({
  setup() {
    onMounted(() => {
      const body = document.querySelector('body');
      const div = document.createElement('div');
      div.style.position = 'fixed'; // 固定定位
      div.style.left = '20px'; // 距离右侧20像素
      div.style.bottom = '20px'; // 距离底部20像素
      div.style.zIndex = '1000'; // 确保在最上层
      const musicApp = createApp(music, { src, title, artist });
      musicApp.mount(div);
      body.appendChild(div);
    });
  }
});
