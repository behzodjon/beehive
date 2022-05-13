<template>
    <div class="relative mb-10 md:flex md:space-x-14">
        <div class="relative left-0 md:absolute md:top-1 top-8">
            <img class="w-10 h-auto rounded-full" src="../../assets/images/john-doe.jpg" alt="">
        </div>

        <!-- content -->
        <div class="relative w-full">
            <div class="mb-3">
                <div v-if="post.type == 'group'" class="flex items-center space-x-2">
                    <div class="ml-12 leading-none md:ml-3">
                        <router-link class="font-semibold text-dark-200" :to="'#'">Basenane
                        </router-link>
                        joined the group
                    </div>
                    <router-link class="flex items-center space-x-2" to="#">
                        <figure>
                            <img class="inline-block w-5 rounded-full"
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/7/5e2cd26be7154-bpthumb.jpg"
                                alt="image">
                        </figure>
                        <span class="block w-full text-sm underline md:text-xs">Climate change</span>
                    </router-link>
                </div>
                <div v-else class="ml-12 md:ml-0">
                    <router-link class="font-semibold text-dark-200" :to="'#'">Basenane</router-link>
                    posted an update
                </div>

                <div class="text-[90%] text-gray-50 mt-4 md:mt-0">
                    3 hours, 2 minutes ago
                </div>

                <div v-if="post.type == 'group'" class="md:max-w-[75%] w-full">
                    <div class="overflow-hidden border border-gray-100 rounded-md">
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
                <div v-else>
                    <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non provident, similique sunt in cul..</p>
                </div>
                <ul v-if="post.hasImg" class="flex flex-wrap md:max-w-[75%] w-full gap-y-4">
                    <li>
                        <figure class="relative overflow-hidden rounded-md post-shadow">
                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-md hover:scale-110"
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                alt="">
                        </figure>
                    </li>
                    <li class="flex gap-4">
                        <figure class="relative overflow-hidden rounded-md post-shadow">
                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-md hover:scale-110"
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                alt="">
                        </figure>
                        <figure class="relative overflow-hidden rounded-md post-shadow">
                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-md hover:scale-110"
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                alt="">
                        </figure>
                        <figure class="relative overflow-hidden rounded-md post-shadow">
                            <img class="object-cover w-full h-full duration-500 ease-in-out rounded-md hover:scale-110"
                                src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2021/10/maxresdefault-1-450x320.jpg"
                                alt="">
                        </figure>
                    </li>
                </ul>

                <!-- post actions -->
                <div class="relative flex items-center justify-between px-6 py-4 mt-4 space-x-4 border-gray-100 border-y md:px-0 md:justify-start">
                    <div @click="toggleLike" :class="[liked ? 'text-green-100' : 'text-pink-500']"
                        class="flex items-center space-x-1 transition-all duration-500 delay-150 cursor-pointer">
                        <like class="w-5 h-5 pb-[2px] " />
                        <span v-if="liked" class="hidden md:block">Liked</span>
                        <span v-else class="hidden md:block">Like</span>
                        <span v-if="liked" class="block bg-[#2ed5731a] px-[6px] rounded-[50px] leading-none">1</span>
                    </div>
                    <div @click="openComment = !openComment"
                        class="relative flex items-center space-x-1 cursor-pointer">
                        <span class="hidden text-gray-300 md:block">Comment</span>
                        <comments class="w-5 h-5 pb-[2px] md:hidden " />
                        <span
                            class="block px-[6px] border border-gray-100 rounded-full text-[85%] leading-none pb-[3px] pt-[6px]">0</span>
                    </div>
                    <div @click="isFavorite = !isFavorite" class="relative flex items-center space-x-1 cursor-pointer">
                        <span v-if="isFavorite" class="hidden text-gray-300 md:block">Remove Favorite</span>
                        <span v-else class="hidden text-gray-300 md:block">Mark as Favorite</span>
                        <star class="w-5 h-5 pb-[2px] md:hidden " />
                    </div>
                    <router-link to="#" class="relative items-center hidden space-x-1 md:flex ">
                        <span class="text-gray-300">
                            Delete</span>
                    </router-link>
                </div>

                <!-- comments -->
                <Comment @close-comment="closeComment" v-if="openComment" class="relative" />
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import Comment from "@/components/posts/Comment.vue";
import like from '@/assets/images/icons/like.svg'
import globe from '@/assets/images/icons/globe.svg'
import plus from '@/assets/images/icons/plus.svg'
import comments from '@/assets/images/icons/comments.svg'
import star from '@/assets/images/icons/star.svg'
import starHalf from '@/assets/images/icons/star-half.svg'

defineProps({
    post: Object,
})
const liked = ref(false)
const openComment = ref(false)
const isFavorite = ref(false)
function toggleLike() {
    liked.value = !liked.value
}

function closeComment() {
    openComment.value = false
}
</script>

<style lang="scss" scoped>
</style>