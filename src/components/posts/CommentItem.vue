<template>
    <li class="flex flex-col pt-8">
        <div class="relative flex space-x-2">
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
                    <span>{{ comment.text }}</span>
                </div>
                <div class="space-x-2">
                    <button @click="clickReply" class="text-dark-200 text-[90%] font-semibold">Reply</button>
                    <button @click="deleteComment(comment)"
                        class="text-dark-200 text-[90%] font-semibold">Delete</button>
                </div>
            </div>
        </div>

        <CommentItem class="pl-4 xl:pl-8" v-for="reply in comment.replies" :key="comment.id" :comment="reply"
            :parent="comment" @eventChild="recursiveEmit" 
            @eventDeleteChild="recursiveEmitDelete" />

        <CommentForm v-show="isReplying" @add-comment="addComment" @close-comment="closeComment" />
    </li>
</template>

<script setup>
import { ref } from "vue";
import CommentForm from "./CommentForm.vue";

const props = defineProps({
    comment: Object,
    parent: Object,
})

const emit = defineEmits(['addComment', 'eventChild', 'deleteComment', 'eventDeleteChild'])

const isReplying = ref(false)

function clickReply() {
    isReplying.value = !isReplying.value;
}

function recursiveEmit(data) {
    emit('eventChild', data);
}
function recursiveEmitDelete(data) {
    emit('eventDeleteChild', data);
}

function addComment(text) {
    isReplying.value = false;
    emit('eventChild', {
        parent_id: props.comment.id,
        text: text
    });
}

function deleteComment(data) {
    emit('eventDeleteChild', {
        parent: props.parent,
        item: data,
    });
}

function closeComment() {
    isReplying.value = false
}

</script>

<style lang="scss" scoped>
</style>