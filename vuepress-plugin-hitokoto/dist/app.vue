<template>
    <div>
        <span>{{ hitokoto }}</span>
    </div>
</template>
<script setup>
import { defineProps, ref, onMounted } from 'vue'
const props = defineProps({
    type: {
        type: String,
        required: true,
        default: ''
    }
})
const hitokoto = ref('')
onMounted(() => {
    console.log('开始获取hitokoto')
    fetch(`https://v1.hitokoto.cn/?c=${props.type}`).then(res => res.json()).then(data => {
        hitokoto.value = data.hitokoto
    })
})

</script>
<style scoped></style>