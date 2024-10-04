<template>
    <div class="container">
        <!-- 如果提供了音乐文件的 URL -->
        <div v-if="props.src">
            <div class="audio-wrapper">
                <audio ref="audioPlayer" :src="props.src" class="audio-player" @timeupdate="updateTime"></audio>
                <!-- 控制播放/暂停的按钮 -->
                <div class="play-button" @click="togglePlay">
                    <el-icon v-if="isPlaying">
                        <video-pause /> <!-- 暂停图标 -->
                    </el-icon>
                    <el-icon v-else>
                        <video-play /> <!-- 播放图标 -->
                    </el-icon>
                </div>
                <!-- 显示当前时间/总时间 -->
                <div class="total-time">{{ currentTime }} / {{ totalTime }}</div>
                <!-- 歌曲名称和作者 -->
                <div class="song-info">
                    <div class="song-title">{{ props.title }}</div>
                    <div class="song-artist">{{ props.title }}</div>
                </div>
            </div>
        </div>
        <!-- 没有提供音乐文件的提示信息 -->
        <div v-else>
            <p>没有提供音乐文件 URL/SRC。</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import { VideoPlay, VideoPause } from '@element-plus/icons-vue' // 引入播放和暂停图标
import { ElIcon } from 'element-plus'

// 定义状态，用于追踪播放器是否正在播放
const isPlaying = ref(false)
const currentTime = ref('00:00') // 初始化当前时间
const totalTime = ref('00:00') // 初始化总时间
const audioPlayer = ref(null)
let audioElement;



// 倒计时更新函数
const updateTime = () => {
    if (audioPlayer.value) {
        const duration = audioPlayer.value.duration;
        const current = audioPlayer.value.currentTime;
        currentTime.value = timeToMinute(current);
        totalTime.value = timeToMinute(duration);
    }
}
const props = defineProps({
    src: {
        type: String,
        required: false,
        default: 'https://download.samplelib.com/mp3/sample-15s.mp3'
    },
    title: {
        type: String,
        required: false,
        default: '默认歌名'
    },
    artist: {
        type: String,
        required: false,
        default: '默认歌手'
    }
});

/*const props = {
  src: "https://download.samplelib.com/mp3/sample-15s.mp3"
};*/

// 时间格式化函数
function timeToMinute(times) {
    if (times < 0) return '00:00';

    const minutes = Math.floor(times / 60);
    const seconds = Math.floor(times % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 切换播放/暂停状态
const togglePlay = () => {
    if (audioPlayer.value) {
        if (isPlaying.value) {
            audioPlayer.value.pause()
        } else {
            audioPlayer.value.play()
        }
        isPlaying.value = !isPlaying.value
    }
}

// 组件挂载时创建音频元素
onMounted(() => {
    if (props.src) {
        audioElement = audioPlayer.value;
        audioElement.addEventListener('loadeddata', () => {
            totalTime.value = timeToMinute(audioElement.duration);
        });
    }
});

// 组件卸载时移除事件监听
onBeforeUnmount(() => {
    if (props.src) {
        if (audioElement) {
            audioElement.removeEventListener('loadeddata', () => { });
        }
    }
});
</script>

<style scoped>
.container {
    text-align: center;
    padding: 20px;
}

.audio-wrapper {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 60px;
    border-radius: 30px;
    padding: 10px;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    border: 0.8px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    color: rgb(255, 255, 255);
}

.audio-player {
    width: 100%;
    border-radius: 30px;
    outline: none;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.el-icon {
    font-size: 24px;
    color: #007bff;
}

.total-time {
    position: absolute;
    top: 50%;
    /* 垂直居中 */
    left: 5%;
    /* 设置距离左侧的距离 */
    transform: translateY(-50%);
    /* 垂直居中 */
    font-size: 12px;
    /* 设置字体大小 */
    color: #000000;
    /* 设置字体颜色为黑色 */
    z-index: 10;
    /* 使总时间在音频播放按钮之上 */
}

.song-info {
    position: absolute;
    top: 50%;
    right: 5%;
    /* 根据需要调整位置 */
    transform: translateY(-50%);
    /* 垂直居中 */
    text-align: left;
    display: flex;
    flex-direction: column;
    /* 垂直排列 */
    justify-content: center;
    /* 垂直居中 */
    height: 50%;
    /* 占据整个高度 */
}

.song-title {
    font-size: 14px;
    /* 根据需要调整字体大小 */
    color: #000;
}

.song-artist {
    font-size: 12px;
    /* 根据需要调整字体大小 */
    color: #000;
}

p {
    color: #555;
    font-weight: bold;
}
</style>