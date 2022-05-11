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
                <TabPanel class="relative flex mb-10 space-x-14">
                    <div class="absolute left-0 top-1">
                        <img class="w-10 h-auto rounded-full" src="../../assets/images/john-doe.jpg" alt="">
                    </div>
                    <div class="relative">
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
                                <div class="flex items-center space-x-1 text-pink-500" >
                                    <like class="w-4 h-4 " />
                                    <span class="block">Like</span>
                                </div>
                                 <router-link to="#" class="flex items-center space-x-1 " >
                                    <span class="text-[#838daa]">Comment</span>
                                    <span class="block px-[6px] border border-gray-100 rounded-full text-[85%]">0</span>
                                </router-link>
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
import like from '../../assets/images/icons/like.svg'


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