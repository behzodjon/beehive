<template>
    <div>
        <TabGroup>
            <TabList class="flex mb-6 space-x-2 text-xs border-b border-gray-100 md:space-x-3 md:text-sm">
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