<template>
    <div>
        <TabGroup>
            <TabList class="flex mb-6 space-x-3 border-b border-gray-100">
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-3 font-semibold" :class="{ 'selected': selected }">
                        All Members
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-3 font-semibold" :class="{ 'selected': selected }">
                        My Groups
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-3 font-semibold" :class="{ 'selected': selected }">
                        My Favorites
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-3 font-semibold" :class="{ 'selected': selected }">
                        Mentions
                    </button>
                </Tab>
            </TabList>
            <TabPanels class="relative tab-panel ">
                <TabPanel >
                    <div class="relative flex mb-10 space-x-14">
                    <div class="absolute left-0 top-1">
                        <img class="w-10 h-auto rounded-full" src="../../assets/images/john-doe.jpg" alt="">
                    </div>
                    <div class="relative w-full">
                        <div class="mb-3">
                            <div>
                                <router-link class="font-semibold text-dark-200" :to="'#'">Basenane</router-link>
                                posted an update
                            </div>
                            <div class="text-[90%] text-gray-50">
                                3 hours, 2 minutes ago
                            </div>
                            <div>
                                <p>@sophia tset</p>
                            </div>
                            <div class="relative flex items-center py-4 mt-4 space-x-4 border-gray-100 border-y">
                                <div @click="toggleLike" :class="[liked ? 'text-green-100' : 'text-pink-500']"
                                    class="flex items-center space-x-1 transition-all duration-500 delay-150 cursor-pointer">
                                    <like class="w-5 h-5 pb-[2px] " />
                                    <span v-if="liked" class="block">Liked</span>
                                    <span v-else class="block">Like</span>
                                    <span v-if="liked"
                                        class="block bg-[#2ed5731a] px-[6px] rounded-[50px] leading-none">1</span>
                                </div>
                                <div @click="openComment = !openComment"
                                    class="relative flex items-center space-x-1 cursor-pointer">
                                    <span class="text-gray-300">Comment</span>
                                    <span
                                        class="block px-[6px] border border-gray-100 rounded-full text-[85%] leading-none pb-[3px] pt-[6px]">0</span>
                                </div>
                                <div @click="isFavorite=!isFavorite" class="relative flex items-center space-x-1 cursor-pointer">
                                    <span  v-if="isFavorite"  class="text-gray-300">Remove Favorite</span>
                                    <span v-else class="text-gray-300">Mark as Favorite</span>
                                </div>
                                <router-link to="#" class="relative flex items-center space-x-1">
                                    <span class="text-gray-300">
                                        Delete</span>
                                </router-link>
                            </div>
                            <div v-if="openComment" class="relative">
                                <form class="flex w-full py-4 space-x-4">
                                    <div>
                                        <img class="rounded-[50%] w-[30px] h-auto object-cover"
                                            src="../../assets/images/john-doe.jpg" alt="avatar">
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <textarea
                                            class="block w-full h-10 px-4 py-1 text-sm bg-white border border-gray-100 border-solid rounded-3xl"
                                            cols="30" rows="50"></textarea>
                                        <div class="mt-2 space-x-4 text-xs">
                                            <button class="py-1 primary-btn">Post</button>
                                            <button @click="openComment = false"
                                                class="text-pink-500 hover:underline">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    </div>
                     <div class="relative flex mb-10 space-x-14">
                    <div class="absolute left-0 top-1">
                        <img class="w-10 h-auto rounded-full" src="../../assets/images/john-doe.jpg" alt="">
                    </div>
                    <div class="relative w-full">
                        <div class="mb-3">
                            <div>
                                <router-link class="font-semibold text-dark-200" :to="'#'">Basenane</router-link>
                                posted an update
                            </div>
                            <div class="text-[90%] text-gray-50">
                                3 hours, 2 minutes ago
                            </div>
                            <div>
                                <p>@sophia tset</p>
                            </div>
                            <div class="relative flex items-center py-4 mt-4 space-x-4 border-gray-100 border-y">
                                <div @click="toggleLike" :class="[liked ? 'text-green-100' : 'text-pink-500']"
                                    class="flex items-center space-x-1 transition-all duration-500 delay-150 cursor-pointer">
                                    <like class="w-5 h-5 pb-[2px] " />
                                    <span v-if="liked" class="block">Liked</span>
                                    <span v-else class="block">Like</span>
                                    <span v-if="liked"
                                        class="block bg-[#2ed5731a] px-[6px] rounded-[50px] leading-none">1</span>
                                </div>
                                <div @click="openComment = !openComment"
                                    class="relative flex items-center space-x-1 cursor-pointer">
                                    <span class="text-gray-300">Comment</span>
                                    <span
                                        class="block px-[6px] border border-gray-100 rounded-full text-[85%] leading-none pb-[3px] pt-[6px]">0</span>
                                </div>
                                <div @click="isFavorite=!isFavorite" class="relative flex items-center space-x-1 cursor-pointer">
                                    <span  v-if="isFavorite"  class="text-gray-300">Remove Favorite</span>
                                    <span v-else class="text-gray-300">Mark as Favorite</span>
                                </div>
                                <router-link to="#" class="relative flex items-center space-x-1">
                                    <span class="text-gray-300">
                                        Delete</span>
                                </router-link>
                            </div>
                            <div v-if="openComment" class="relative">
                                <form class="flex w-full py-4 space-x-4">
                                    <div>
                                        <img class="rounded-[50%] w-[30px] h-auto object-cover"
                                            src="../../assets/images/john-doe.jpg" alt="avatar">
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <textarea
                                            class="block w-full h-10 px-4 py-1 text-sm bg-white border border-gray-100 border-solid rounded-3xl"
                                            cols="30" rows="50"></textarea>
                                        <div class="mt-2 space-x-4 text-xs">
                                            <button class="py-1 primary-btn">Post</button>
                                            <button @click="openComment = false"
                                                class="text-pink-500 hover:underline">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    </div>
                </TabPanel>
                
            </TabPanels>
        </TabGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import like from '@/assets/images/icons/like.svg'

const liked = ref(false)
const openComment = ref(false)
const isFavorite = ref(false)

function toggleLike() {
    liked.value = !liked.value
}

</script>

<style  scoped>
.selected {
    @apply text-pink-500 border-b-2 border-pink-500 outline-none
}

.tab-panel::before {
    content: "";
    display: block;
    background: #e7edf2;
    width: 2px;
    height: 100%;
    position: absolute;
    left: 20px;
    top: 2px;
    z-index: -1;
    opacity: .7;
}
</style>