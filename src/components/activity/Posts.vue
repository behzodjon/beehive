<template>
    <div>
        <TabGroup>
            <TabList class="flex mb-6 space-x-1 text-xs border-b border-gray-100 xl:justify-between md:space-x-3 md:text-sm">
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-2 font-semibold xl:pb-3" :class="{ 'selected': selected }">
                        All Members
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-2 font-semibold xl:pb-3" :class="{ 'selected': selected }">
                        My Groups
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-2 font-semibold xl:pb-3" :class="{ 'selected': selected }">
                        My Favorites
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button class="pb-2 font-semibold xl:pb-3" :class="{ 'selected': selected }">
                        Mentions
                    </button>
                </Tab>
                <!-- <Tab v-slot="{ selected }" as="template">
                    <Menu as="div" class="relative inline-block text-left">
                        <div class="block md:hidden">
                            <MenuButton class="inline-flex justify-center w-full px-4 py-2 ">
                                <ellipsis class="w-4 h-7" />
                            </MenuButton>
                        </div>
                        <MenuItems
                            class="absolute right-0 z-30 w-40 py-1 origin-top-right bg-white border border-gray-100 border-solid rounded-md focus:border-none">
                            <div>
                                <MenuItem>
                                <div class="px-4 border-b border-gray-100">
                                   My Groups
                                </div>
                                </MenuItem>
                                 <MenuItem>
                                <div class="px-4 border-b border-gray-100">
                                   My Favorites
                                </div>
                                </MenuItem>
                                  <MenuItem>
                                <div class="px-4 border-b border-gray-100">
                                 Mentions
                                </div>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </Tab> -->
            </TabList>
            <TabPanels class="relative tab-panel md:before:block before:hidden">
                <TabPanel>
                    <PostItem v-for="post in posts" :key="post.id" :post="post" />
                </TabPanel>
                  <TabPanel>
                    <div>Groups</div>
                </TabPanel>

            </TabPanels>
        </TabGroup>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ellipsis from '@/assets/images/icons/ellipsis.svg'
import PostItem from "@/components/posts/PostItem.vue";

const posts = reactive([
    {
        id: 1,
        type: 'group'
    },
    {
        id: 2,
        type: 'post',
        hasImg: false
    },
    {
        id: 3,
        type: 'post',
        hasImg: true
    },
])



</script>

<style  scoped>
.selected {
    @apply text-pink-500 border-b-2 border-pink-500 outline-none
}

.tab-panel::before {
    content: "";
    background: #e7edf2;
    width: 2px;
    height: 100%;
    position: absolute;
    left: 20px;
    top: 2px;
    z-index: -1;
    opacity: .7;
}

.post-shadow {
    box-shadow: 0 16px 25px -23px #000;
}
</style>