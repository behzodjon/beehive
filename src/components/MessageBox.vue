<template>
    <div class="fixed bottom-0 z-40 ">
        <div :class="[collapsed ? 'w-20 bg-[#f8f9fb]' : 'w-[240px] bg-white']"
            class="fixed top-0 bottom-0 right-0 flex flex-col max-h-screen   border-l border-solid border-[#e7edf2] chat-transition">
            <div class="flex flex-col">
                <div class="flex justify-between h-20 px-6 py-2  border-b border-solid border-[#e7edf2] items-center">
                    <div class="relative inline-flex items-center space-x-2">
                        <comments class="w-5 text-pink-500 h-7" />
                        <div v-if="!collapsed" class="text-[1em] font-bold text-[#4f515b] quicksand">Messenger</div>
                    </div>
                    <div v-if="!collapsed">
                        <div>
                            <ellipsis class="w-4 h-7" />
                        </div>
                    </div>
                </div>
                <div v-if="!collapsed" class="relative px-6 py-3 overflow-hidden">
                    <div class="chat-list__scroll">
                        <TabGroup>
                            <TabList class="flex space-x-3">
                                <Tab v-slot="{ selected }" as="template">
                                    <button :class="[selected ? ' text-pink-500 border-none outline-none' : '']">
                                        Friends
                                    </button>
                                </Tab>
                                <Tab v-slot="{ selected }" as="template"> <button
                                        :class="[selected ? ' text-pink-500 border-none outline-none' : '']">
                                        Groups
                                    </button></Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div>
                                        <div class=" max-h-[42px] relative mt-4">
                                            <div class="absolute -translate-y-1/2 left-4 top-1/2">
                                                <search class="w-3 h-6 text-gray-200" />
                                            </div>
                                            <input type="text" placeholder="Find friends"
                                                class="w-full  pr-4 bg-white border border-gray-100 border-solid pl-9 py-[0.375rem] rounded-[1.25rem] h-10 text-[90%] text-gray-200 placeholder:text-gray-200">
                                        </div>
                                        <div class="mt-6">

                                            <span>No friend found</span>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <div class=" max-h-[42px] relative mt-4">
                                            <div class="absolute -translate-y-1/2 left-4 top-1/2">
                                                <search class="w-3 h-6 text-gray-200" />
                                            </div>
                                            <input type="text" placeholder="Find groups"
                                                class="w-full  pr-4 bg-white border border-gray-100 border-solid pl-9 py-[0.375rem] rounded-[1.25rem] h-10 text-[90%] text-gray-200 placeholder:text-gray-200">
                                        </div>
                                        <div class="mt-4">
                                            <div @click="showMessenger(group)" v-for="(group, index) in groups"
                                                :key="index" class="flex items-center mb-2 space-x-2 cursor-pointer">
                                                <img class="rounded-full w-[30px] h-auto"
                                                    src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg"
                                                    alt="">
                                                <div class="font-medium text-[#29292d] text-[0.85em]">{{ group.title }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
                <div @click="collapsed = !collapsed"
                    class="absolute inset-x-0 bottom-0 flex items-center h-20 px-6 space-x-2 bg-white border-t border-gray-100 border-solid cursor-pointer">
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
        <!-- <Chat /> -->
    </div>
</template>

<script setup>
import comments from '../assets/images/icons/comments.svg'
import ellipsis from '../assets/images/icons/ellipsis.svg'
import search from '../assets/images/icons/search.svg'
import AngleRight from '../assets/images/icons/angle-right.svg'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref } from "vue";
import Chat from './Chat.vue'

const collapsed = ref(true)


const groups = ref([
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers'
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers'
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers'
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers'
    },
    {
        'image': 'https://mythemestore.com/beehive-preview/wp-conten…uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg',
        'title': 'Gamers'
    },
])

function showMessenger(group) {
    console.log(group)
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