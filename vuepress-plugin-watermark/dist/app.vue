<template>
    <div class="watermark-container" ref="parentRef">
        <slot></slot>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watchEffect, computed } from "vue";

function useWatermarkBg(props) {
    return computed(() => {
        const canvas = document.createElement("canvas");
        const devicePixelRatio = window.devicePixelRatio || 1;
        const fontSize = props.fontSize * devicePixelRatio;
        const font = `${fontSize}px serif`;
        const ctx = canvas.getContext("2d");
        ctx.font = font;
        const { width } = ctx.measureText(props.text);
        const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio;
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((Math.PI / 180) * -45);
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.font = font;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(props.text, 0, 0);
        return {
            base64: canvas.toDataURL(),
            size: canvasSize,
            styleSize: canvasSize / devicePixelRatio,
        };
    });
}

const props = defineProps({
    text: {
        type: String,
        required: true,
        default: "watermark",
    },
    fontSize: {
        type: Number,
        default: 40,
    },
    gap: {
        type: Number,
        default: 20,
    },
});

const bg = useWatermarkBg(props);
const parentRef = ref(null);
const flag = ref(0);
let div;

watchEffect(() => {
    flag.value;
    if (!parentRef.value) {
        return;
    }
    if (div) {
        div.remove();
    }
    const { base64, styleSize } = bg.value;
    div = document.createElement("div");
    div.style.backgroundImage = `url(${base64})`;
    div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
    div.style.backgroundRepeat = "repeat";
    div.style.zIndex = 9999; // 设置 z-index 低于父级内容
    div.style.position = "absolute";
    div.style.inset = 0;
    parentRef.value.appendChild(div);
});

let ob;
onMounted(() => {
    ob = new MutationObserver((records) => {
        for (const record of records) {
            for (const dom of record.removedNodes) {
                if (dom === div) {
                    flag.value++;
                    return;
                }
            }
            if (record.target === div) {
                flag.value++;
                return;
            }
        }
    });
    ob.observe(parentRef.value, {
        childList: true,
        attributes: true,
        subtree: true,
    });
});

onUnmounted(() => {
    ob && ob.disconnect();
    div = null;
});
</script>

<style scoped>
.watermark-container {
    position: relative;
    /*z-index: 0;*/
    /* 确保该值高于水印 div */
}
</style>