<template>
    <div id="busuanzi_container_site_pv" class="busuanzi-container">
        <span class="pv-text">访问量</span>
        <span id="busuanzi_value_site_pv" class="pv-value"></span>
        <span class="pv-text">次</span>
        <span class="uv-text">访客人数</span>
        <span id="busuanzi_value_site_uv" class="uv-value"></span>
        <span class="uv-text">人</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// 接收传递过来的 server 参数
const props = defineProps({
    server: {
        type: String,
        required: true,
    }
});

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const busuanziScript = document.createElement('script');
    busuanziScript.src = '' + props.server;
    document.body.appendChild(busuanziScript);
}
</script>

<style scoped>
.busuanzi-container {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: inline-block;
}

.pv-text,
.uv-text {
    color: #555;
    font-weight: bold;
    margin-right: 4px;
}

.pv-value,
.uv-value {
    color: #007bff;
    font-weight: bold;
    margin-right: 4px;
}

.pv-value,
.uv-value {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
