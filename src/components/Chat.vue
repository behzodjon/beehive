<template>
    <li class="z-50 md:w-[280px] absolute md:relative ml-[1.375rem] top-9 md:top-0 w-60 md:left-0 left-3">
        <div
            class="w-full bg-white h-[312px] justify-between border border-solid border-gray-100 absolute bottom-0 flex flex-col px-1 pt-1 rounded-tl-[12px] rounded-tr-[12px]">

            <!-- group info -->
            <div class="relative flex items-center pb-1 space-x-2 border-b border-gray-100 border-solid cursor-pointer">
                <div class="relative ">
                    <img class="w-[30px] h-auto rounded-full"
                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/6/5e2cce5312454-bpthumb.jpg"
                        alt="">
                </div>
                <ul class="flex flex-col">
                    <a class="font-semibold text-dark-200">Photography</a>
                    <small class="text-[80%] leading-[1] text-gray-50"> Offline</small>
                </ul>
                <div @click="$emit('closeChat', chat)" class="absolute right-0 text-red-600 cursor-pointer top-1">
                    <close class="w-4 h-4" />
                </div>
            </div>

            <!-- message area -->
            <div ref="messagesArea" class="relative flex flex-col h-full chat-list__scroll">
                <div class="block h-full max-h-full ">
                    <div class="flex flex-col p-0 m-0 chat-area">
                        <ul class="flex flex-col p-0 m-0 grow">
                            <li class="w-full ">
                                <div class="flex items-start">
                                    <div class="flex flex-col flex-wrap items-end w-full text-right">
                                        <div v-for="(message, index) in messages" :key="index" class="w-full">
                                            <div v-if="index == 0"
                                                class="inline-flex justify-center text-[80%] w-full text-gray-50">
                                                {{ dayjs(message.date).format('MMM D, YYYY h:mm A') }}</div>
                                            <div class="flex justify-end">
                                                <div
                                                    class="border-[0.5px] border-solid border-white px-4 py-2 mt-2 rounded-tr-[12px] rounded-tl-[12px] rounded-bl-[12px] message-text">
                                                    {{ message.text }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- message text -->
            <div>
                <form @submit.prevent="sendMessage">
                    <div class="flex items-center border-t border-solid border-t-gray-100">
                        <div class="relative grow">
                            <input @focus.native="togglePicker()" ref="input" autofocus v-model="message" type="text"
                                class="min-h-[26px] inline-block py-2 leading-[1.25] w-full outline-none text-[90%] border-none"
                                placeholder="Write your message" required>
                        </div>
                        <div @click="showEmoji = !showEmoji" class="inline-flex items-center cursor-pointer">
                            <span class="text-xl">&#128515;</span>
                        </div>
                        <div class="block p-1 ml-2 bg-pink-500 rounded-full md:hidden">
                            <button class="block" type="submit">
                                <messageIcon class="w-4 h-4 text-white rotate-[230deg]" />
                            </button>
                        </div>
                    </div>
                    <div class="absolute bottom-9" v-if="showEmoji">
                        <Picker :data="emojiIndexData" set="twitter" @select="showEmojiElement" />
                    </div>

                </form>
            </div>
        </div>
    </li>
</template>

<script setup>
import close from '../assets/images/icons/close.svg'
import { ref, nextTick } from "vue";
import data from "emoji-mart-vue-fast/data/all.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
import dayjs from 'dayjs'
import messageIcon from '@/assets/images/icons/message.svg'

let emojiIndex = new EmojiIndex(data);

defineProps({
    chat: Object
})

const emojiIndexData = ref(emojiIndex)
const emojisOutput = ref('')
const input = ref(null)
const messagesArea = ref(null)
const showEmoji = ref(false)
const messages = ref([])
const message = ref('')

async function sendMessage() {
    let data = { text: message.value, date: new Date() }
    messages.value.push(data)
    await nextTick()
    messagesArea.value.scrollTop = messagesArea.value.scrollHeight
    message.value = ''
    emojisOutput.value = ''
}

async function showEmojiElement(emoji) {
    emojisOutput.value = emojisOutput.value + emoji.native;
    const cursorPosition = input.value.selectionEnd
    const start = message.value.substring(0, input.value.selectionStart)
    const end = message.value.substring(input.value.selectionStart)
    message.value = start + emojisOutput.value + end
    input.value.focus()
    await nextTick()
    input.value.selectionEnd = cursorPosition + emoji.native.length
    emojisOutput.value = ''
}

function togglePicker() {
    showEmoji.value = false
}
</script>

<style  scoped>
.chat-list__scroll {
    display: block;
    overflow: hidden;
    height: 100%;
    max-height: 100vh;
}

.message-text {
    background-color: rgba(130, 36, 227, 0.05);
}
</style>