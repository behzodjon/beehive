<template>
    <div class="chat-windows">
        <ul class="flex justify-end h-8 p-0 m-0">
            <li class="z-50 w-[280px] relative ml-[1.375rem]">
                <div
                    class="w-full bg-white h-[312px] border border-solid border-[#e7edf2] absolute bottom-0 flex flex-col px-1 pt-1 rounded-tl-[12px] rounded-tr-[12px]">
                    <div
                        class="relative flex items-center pb-1 border-b border-solid cursor-pointer border-[#e7edf2] space-x-2">
                        <div class="relative ">
                            <img class="w-[30px] h-auto rounded-full"
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/6/5e2cce5312454-bpthumb.jpg"
                                alt="">
                        </div>
                        <ul class="flex flex-col">
                            <a class="font-semibold text-[#29292d]">Photography</a>
                            <small class="text-[80%] leading-[1] text-[#bbbbdc]"> Offline</small>
                        </ul>
                        <div class="absolute right-0 text-red-600 top-1">
                            <close class="w-4 h-4" />
                        </div>
                    </div>
                    <div class="relative flex flex-col overflow-hidden">
                        <div class="block h-full">
                            <div class="flex flex-col p-0 m-0"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex border-t border-solid border-[#e7edf2]">
                            <div class="relative">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import close from '../assets/images/icons/close.svg'
import { ref } from "vue";
import data from "emoji-mart-vue-fast/data/all.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
let emojiIndex = new EmojiIndex(data);


const emojiIndexData = ref(emojiIndex)
const emojisOutput = ref('')

const show = ref(false)


function showEmoji(emoji) {
    console.log(emoji)
}
</script>

<style  scoped>
.chat-transition {
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}

.collapse-icon {
    background-image: linear-gradient(135deg, #a968ec 0%, #8224e3 55%, #c395f1 110%);
    background-size: 200% auto;
}

.chat-list__scroll {
    display: block;
    overflow: hidden;
    height: 100%;
    width: calc(100% + 15px);
    max-height: calc(100vh - 190px);
}

.chat-list__scroll:hover {
    overflow: hidden scroll;
}

.chat-list__scroll::-webkit-scrollbar {
    width: 4px;
    opacity: 0;
}


.chat-list__scroll::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    height: calc(100% - 10px);
}

.chat-list__scroll::-webkit-scrollbar-track {
    border-radius: 50px;
}

.chat-windows {
    width: calc(100vw - 112px);
}
</style>