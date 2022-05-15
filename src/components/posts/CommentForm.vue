<template>
    <form @submit.prevent="addComment" class="flex w-full py-4 space-x-4">
        <div>
            <img class="rounded-[50%] w-[30px] h-auto object-cover" src="../../assets/images/john-doe.jpg" alt="avatar">
        </div>
        <div class="flex flex-col w-full">
            <textarea v-model="form.commentText"
                class="block w-full h-10 px-4 text-sm bg-white border border-gray-100 border-solid rounded-3xl"
                cols="30" rows="50"></textarea>
            <div class="mt-2 space-x-4 text-xs">
                <button type="submit" class="py-1 primary-btn">Post</button>
                <!-- <button @click="$emit('closeComment')" class="text-pink-500 hover:underline">Cancel</button> -->
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, reactive } from "vue";

const emit = defineEmits(["addComment"]);

const form = reactive({
    commentText: null,
})

function addComment() {
    emit('addComment', form.commentText.trim());
    form.commentText = '';
}

</script>

<style lang="scss" scoped>
</style>