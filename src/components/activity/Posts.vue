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
                   <PostItem v-for="post in posts" :key="post.id" :post="post"/>
                </TabPanel>

            </TabPanels>
        </TabGroup>
    </div>
</template>

<script setup>
import { ref,reactive } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import like from '@/assets/images/icons/like.svg'
import globe from '@/assets/images/icons/globe.svg'
import plus from '@/assets/images/icons/plus.svg'
import Comment from "../posts/Comment.vue";
import PostItem from "@/components/posts/PostItem.vue";

const liked = ref(false)
const openComment = ref(false)
const isFavorite = ref(false)


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

function toggleLike() {
    liked.value = !liked.value
}

function closeComment() {
    openComment.value = false
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

.post-shadow {
    box-shadow: 0 16px 25px -23px #000;
}
</style>