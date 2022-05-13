<template>
    <div>
        <ul>
            <li>
                <button class="flex items-center pt-4 space-x-2 text-pink-500">
                    <eye class="w-5 h-5" />
                    <span class="block">Show all 34 comments</span>
                </button>
            </li>
            <li class="relative flex pt-8 space-x-2">
                <router-link to="#">
                    <figure>
                        <img class="rounded-[50%] w-[30px] h-auto object-cover" src="@/assets/images/john-doe.jpg"
                            alt="avatar">
                    </figure>
                </router-link>
                <div class="flex flex-col w-full">
                    <div>
                        <router-link class="font-semibold text-dark-200" :to="'#'">Basenane
                        </router-link>
                        replied <span class="text-gray-50 text-[85%]">4 months, 2 weeks ago</span>
                    </div>
                    <div class="bg-[#9c51e90d] py-2 px-4 rounded-[20px]">
                        <span>Wwo</span>
                    </div>
                    <div class="space-x-2">
                        <button class="text-dark-200 text-[90%] font-semibold">Reply</button>
                        <button class="text-dark-200 text-[90%] font-semibold">Delete</button>
                    </div>
                    <ul></ul>
                </div>

            </li>
        </ul>

        <!-- comment form -->
        <form @submit.prevent="saveComment" class="flex w-full py-4 space-x-4">
            <div>
                <img class="rounded-[50%] w-[30px] h-auto object-cover" src="../../assets/images/john-doe.jpg"
                    alt="avatar">
            </div>
            <div class="flex flex-col w-full">
                <textarea v-model="form.comment"
                    class="block w-full h-10 px-4 py-1 text-sm bg-white border border-gray-100 border-solid rounded-3xl"
                    cols="30" rows="50"></textarea>
                <div class="mt-2 space-x-4 text-xs">
                    <button type="submit" class="py-1 primary-btn">Post</button>
                    <button @click="$emit('closeComment')" class="text-pink-500 hover:underline">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref,reactive } from "vue";
import eye from '@/assets/images/icons/eye.svg'

const comments = reactive([])
const form = reactive({
    comment: null,
})

function saveComment() {
    console.log(form.comment)
    comments.push(form.comment)
    console.log(comments)

}

</script>

<style lang="scss" scoped>
</style>