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
                <TabPanel>
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
                                    <div @click="isFavorite = !isFavorite"
                                        class="relative flex items-center space-x-1 cursor-pointer">
                                        <span v-if="isFavorite" class="text-gray-300">Remove Favorite</span>
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
                                <div class="flex space-x-2">
                                    <div>
                                        <router-link class="font-semibold text-dark-200" :to="'#'">Basenane
                                        </router-link>
                                        joined the group
                                    </div>
                                    <router-link class="flex space-x-2" to="#">
                                        <figure>
                                            <img class="inline-block w-5 rounded-full"
                                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/7/5e2cd26be7154-bpthumb.jpg"
                                                alt="image">
                                        </figure>
                                        <span class="block underline">Climate change</span>
                                    </router-link>
                                </div>
                                <div class="text-[90%] text-gray-50">
                                    3 hours, 2 minutes ago
                                </div>
                                <div class="max-w-[75%]">
                                    <div class="overflow-hidden border border-gray-100 rounded-xl">
                                        <div
                                            class="bg-cover bg-[#c5c5c5] bg-center h-[120px] bg-[url('https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/7/cover-image/5eb6fc3531946-bp-cover-image.jpg')]">
                                        </div>
                                        <div class="flex px-6 pt-4 pb-6">
                                            <div class="block px-2 -mt-14">
                                                <router-link to="#">
                                                    <img class="w-[100px] h-auto border-2 border-white rounded-full border-solid"
                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/7/5e2cd26be5187-bpfull.jpg"
                                                        alt="">
                                                </router-link>
                                            </div>
                                            <div class="px-2">
                                                <h5 class="font-bold text-[#29292d] quicksand text-base">
                                                    <router-link to="#">Climate Change</router-link>
                                                </h5>
                                                <div class="flex items-center space-x-1">
                                                    <globe class="w-4 h-4" />
                                                    <span class="text-gray-50">Public</span>
                                                </div>
                                            </div>
                                            <div class="ml-16">
                                                <router-link to="#"
                                                    class="relative block w-8 h-8 text-pink-500 transition-all duration-150 border border-pink-500 border-solid rounded-full hover:bg-pink-500 hover:text-white">
                                                    <plus class="w-full h-[18px] absolute top-[6px] " />
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div @click="isFavorite = !isFavorite"
                                        class="relative flex items-center space-x-1 cursor-pointer">
                                        <span v-if="isFavorite" class="text-gray-300">Remove Favorite</span>
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
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi sint occaecati cupiditate non provident, similique sunt in cul..
                                </div>
                                <ul class="flex flex-wrap max-w-[75%] w-full gap-y-4">
                                    <li>
                                        <figure class="relative overflow-hidden post-shadow rounded-xl">
                                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-xl hover:scale-110"
                                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                                alt="">
                                        </figure>
                                    </li>
                                    <li class="flex gap-4">
                                       <figure class="relative overflow-hidden post-shadow rounded-xl">
                                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-xl hover:scale-110"
                                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                                alt="">
                                        </figure>
                                      <figure class="relative overflow-hidden post-shadow rounded-xl">
                                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-xl hover:scale-110"
                                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                                alt="">
                                        </figure>
                                        <figure class="relative overflow-hidden post-shadow rounded-xl">
                                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-xl hover:scale-110"
                                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                                alt="">
                                        </figure>
                                    </li>
                                </ul>
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
                                    <div @click="isFavorite = !isFavorite"
                                        class="relative flex items-center space-x-1 cursor-pointer">
                                        <span v-if="isFavorite" class="text-gray-300">Remove Favorite</span>
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
import globe from '@/assets/images/icons/globe.svg'
import plus from '@/assets/images/icons/plus.svg'

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
.post-shadow{
    box-shadow: 0 16px 25px -23px #000;
}
</style>