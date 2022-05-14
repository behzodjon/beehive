<template>
    <div class="px-8 pt-8 pb-20">
        <div class="rounded-xl member-bg">
            <h5
                class="relative text-base font-bold quicksand after:absolute after:bg-pink-500 after:content-[''] after:bottom-0 after:left-0 after:h-[2px] after:w-10 pb-4">
                Members</h5>
            <div class="mt-6">
                <TabGroup>
                    <TabList class="flex items-center mb-2 space-x-2 text-dark-200">
                        <Tab v-slot="{ selected }" as="template">
                            <button class="  text-[90%]" :class="{ 'selected': selected }">
                                Newest
                                <span class="">|</span>
                            </button>
                        </Tab>
                        <Tab v-slot="{ selected }" as="template">
                            <button class="  text-[90%]" :class="{ 'selected': selected }">
                                Active
                                <span class="">|</span>
                            </button>
                        </Tab>
                        <Tab v-slot="{ selected }" as="template">
                            <button class="  text-[90%]" :class="{ 'selected': selected }">
                                Popular
                            </button>
                        </Tab>
                    </TabList>
                    <TabPanels class="relative tab-panel ">
                        <TabPanel>
                            <ul>
                                <li v-for="member in 6" :key="member" class="relative flex items-center pb-2 space-x-2">
                                    <figure>
                                        <img class="rounded-[50%] w-10 h-auto object-cover"
                                            src="@/assets/images/john-doe.jpg" alt="avatar">
                                    </figure>
                                    <div class="flex flex-col leading-none">
                                        <router-link class="pb-1 font-semibold text-dark-200 hover:underline" to="#">
                                            Banan
                                        </router-link>
                                        <span class="text-gray-50 text-[90%]">6 minutes ago
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { reactive } from "vue";

</script>

<style  scoped>
.member-bg {
    background: linear-gradient(135deg, rgba(130, 36, 227, 0.04) 0%, rgba(255, 255, 255, 0) 25%, rgba(130, 36, 227, 0.07) 100%);
}

.selected {
    @apply font-semibold outline-none
}
</style>