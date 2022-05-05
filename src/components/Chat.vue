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
                            <TabPanel>Content 2</TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
                <div
                    class="absolute inset-x-0 bottom-0 flex items-center h-20 bg-white border-t border-gray-100 border-solid">
                    <div class="bg-pink-500 collapse-icon">
                        <AngleRight/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import comments from '../assets/images/icons/comments.svg'
import ellipsis from '../assets/images/icons/ellipsis.svg'
import search from '../assets/images/icons/search.svg'
import AngleRight from '../assets/images/icons/angle-right.svg'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'


</script>

<style  scoped>
.collapse-icon {
    background-image: linear-gradient(135deg, #a968ec 0%, #8224e3 55%, #c395f1 110%);
    background-size: 200% auto;
}
</style>