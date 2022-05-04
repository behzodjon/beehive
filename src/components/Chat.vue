<template>
    <div class="fixed bottom-0 z-50">
        <div
            class="fixed top-0 bottom-0 right-0 flex flex-col max-h-screen bg-white w-[240px] border-l border-solid border-[#e7edf2]">
            <div class="flex flex-col">
                <div class="flex justify-between h-20 px-6 py-2  border-b border-solid border-[#e7edf2] items-center">
                    <div class="relative inline-flex items-center space-x-2">
                        <comments class="w-5 text-pink-500 h-7" />
                        <div class="text-[1em] font-bold text-[#4f515b] quicksand">Messenger</div>
                    </div>
                    <div>
                        <div>
                            <ellipsis class="w-4 h-7" />
                        </div>
                    </div>
                </div>
                <div class="px-6 py-3">
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
                            <TabPanel>Content 1</TabPanel>
                            <TabPanel>Content 2</TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import comments from '../assets/images/icons/comments.svg'
import ellipsis from '../assets/images/icons/ellipsis.svg'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'


</script>

<style lang="scss" scoped>
</style>