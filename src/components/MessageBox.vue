<template>
    <div class="fixed bottom-0 z-20 w-full ">
        <div :class="[collapsed ? 'w-20 bg-gray-400' : 'w-[240px] bg-white']"
            class="fixed top-0 bottom-0 right-0 flex-col hidden max-h-screen border-l border-gray-100 border-solid md:flex smooth-transition">
            <div class="flex flex-col">
                <div class="flex items-center justify-between h-20 px-6 py-2 border-b border-gray-100 border-solid">
                    <div class="relative inline-flex items-center space-x-2">
                        <comments class="w-5 text-pink-500 h-7" />
                        <div v-if="!collapsed" class="text-[1em] font-bold text-[#4f515b] quicksand">Messenger
                        </div>
                    </div>
                    <div v-if="!collapsed">
                        <MuteAction />
                    </div>
                </div>
                <div v-if="collapsed" class="px-6 mt-4">
                    <div @click="showChatArea(group)" v-for="(group, index) in groups" :key="index"
                        class="flex items-center my-4 cursor-pointer">
                        <img class="rounded-full w-[30px] h-auto"
                            src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/6/5e2cce5312454-bpthumb.jpg"
                            alt="group avatar">
                    </div>
                </div>
                <!-- tabs list -->
                <div v-if="!collapsed" class="relative px-6 py-3 overflow-hidden">
                    <div class="chat-list__scroll">
                        <MessageBoxTabs :groups="groups" @show-chat-area="showChatArea" />
                    </div>
                </div>
                <!-- collapse  section -->
                <div :class="[collapsed ? 'bg-gray-400' : 'bg-white']" @click="collapsed = !collapsed"
                    class="absolute inset-x-0 bottom-0 flex items-center h-20 px-6 space-x-2 border-t border-gray-100 border-solid cursor-pointer">
                    <div :class="{ '-scale-x-100': collapsed }"
                        class="bg-pink-500 collapse-icon h-[30px] w-[30px] rounded-[50%] relative transition-all duration-500">
                        <div class="absolute inset-y-0 m-auto right-1 h-[20px] w-[20px]">
                            <AngleRight class="w-full h-full text-white" />
                        </div>
                    </div>
                    <div v-if="!collapsed" class="text-[1em] text-[#4f515b] font-bold quicksand">
                        Collapse
                    </div>
                </div>
            </div>
        </div>

        <!-- chat windows -->
        <div class="w-full md:w-[90vw]">
            <ul class="flex justify-end h-8 p-0 m-0">
                <li class="relative block ml-6 lg:hidden">
                    <div class="relative inline-flex items-center">
                        <div
                        @click="showMobileChat = !showMobileChat"
                            class="w-8 h-8 p-2 mr-4 text-white bg-pink-500 rounded-br-none rounded-t-xl rounded-bl-xl ">
                            <comments class="w-4 h-4 text-white" />
                        </div>
                        <div v-show="showMobileChat"  class="w-[255px] bg-white absolute right-0 rounded-t-xl">
                            <div class="absolute w-full bg-white border border-gray-100 bottom-5 rounded-xl">
                                <div class="w-full bg-white h-[312px]  flex flex-col rounded-xl">
                                    <div class="flex justify-between px-4 py-2 border border-gray-100 cursor-pointer rounded-t-xl">
                                        <div class="relative inline-flex items-center">
                                            <h5 class="text-pink-500 text-[1em]">Messenger</h5>
                                        </div>
                                    </div>
                                    <div class="chat-list__scroll">
                                        <MessageBoxTabs class="p-4" :groups="groups" @show-chat-area="showChatArea" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <Chat v-for="(chat, index) in chats" :key="index" @close-chat="closeChat" :chat="chat" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import comments from '../assets/images/icons/comments.svg'
import AngleRight from '../assets/images/icons/angle-right.svg'

import { ref } from "vue";
import Chat from './Chat.vue'
import MuteAction from './MuteAction.vue'
import MessageBoxTabs from './MessageBoxTabs.vue'

defineEmits(['closeChat', 'showChatArea'])

const collapsed = ref(true)
const showMobileChat = ref(false)

const groups = ref([
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers',
        'status': false
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers',
        'status': false
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers',
        'status': false
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers',
        'status': false
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers',
        'status': false
    },
])


const chats = ref([])


function showChatArea(group) {
    chats.value.push(group)
}
function closeChat(chat) {
    chats.value.pop()
}



</script>

<style  scoped>
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
</style>