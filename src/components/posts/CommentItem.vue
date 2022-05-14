<template>
    <li class="flex flex-col pt-8">
        <div class="relative flex space-x-2">
        <router-link to="#">
            <figure>
                <img class="rounded-[50%] w-[30px] h-auto object-cover" src="@/assets/images/john-doe.jpg" alt="avatar">
            </figure>
        </router-link>
        <div class="flex flex-col w-full">
            <div>
                <router-link class="font-semibold text-dark-200" :to="'#'">Basenane
                </router-link>
                replied <span class="text-gray-50 text-[85%]">4 months, 2 weeks ago</span>
            </div>
            <div class="bg-[#9c51e90d] py-2 px-4 rounded-[20px]">
                <span>{{ comment.text }}</span>
            </div>
            <div class="space-x-2">
                <button @click="clickReply()" class="text-dark-200 text-[90%] font-semibold">Reply</button>
                <button class="text-dark-200 text-[90%] font-semibold">Delete</button>
            </div>
        </div>
        </div>
        <CommentForm v-show="isReplying"  @add-comment="addComment" />
    </li>
</template>

<script setup>
import { ref, reactive } from "vue";
import CommentForm from "./CommentForm.vue";

defineProps({
    comment: Object,
})

const emit = defineEmits(['addComment', 'eventChild'])


const isReplying = ref(false)

function clickReply() {
    isReplying.value = !isReplying.value;
}


function addComment(text) {
    isReplying.value = false;
    emit('eventChild', {
        parent_id: comment.id,
        text: text
    });
}
</script>

<style lang="scss" scoped>
</style>