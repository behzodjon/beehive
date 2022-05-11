<template>
    <div>
        <TabGroup>
            <TabList class="flex space-x-3">
                <Tab v-slot="{ selected }" as="template">
                    <button :class="[selected ? ' text-pink-500 border-none outline-none' : '']">
                        Friends
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button :class="[selected ? ' text-pink-500 border-none outline-none' : '']">
                        Groups
                    </button>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div>
                        <div class=" max-h-[42px] relative mt-4">
                            <div class="absolute -translate-y-1/2 left-4 top-1/2">
                                <search class="w-3 h-6 text-gray-200" />
                            </div>
                            <input type="text" placeholder="Find friends"
                                class="w-full outline-none focus:border-pink-500  pr-4 bg-white border border-gray-100 border-solid pl-9 py-[0.375rem] rounded-[1.25rem] h-10 text-[90%] text-gray-200 placeholder:text-gray-200">
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
                                class="w-full  pr-4 bg-white border border-gray-100 border-solid pl-9 py-[0.375rem] rounded-[1.25rem] h-10 text-[90%] text-gray-200 placeholder:text-gray-200 outline-none focus:border-pink-500">
                        </div>
                        <div class="mt-4">
                            <div @click="$emit('showChatArea', group)"  v-for="(group, index) in groups" :key="index"
                                class="flex items-center mb-2 space-x-2 cursor-pointer">
                                <img class="rounded-full w-[30px] h-auto"
                                    src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/8/5eb43993c2d5a-bpthumb.jpg"
                                    alt="">
                                <div class="font-medium text-dark-200 text-[0.85em]">{{ group.title
                                }}
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
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import search from '../assets/images/icons/search.svg'
defineProps({
    groups: Array,
})
</script>

<style lang="scss" scoped>
</style>