<template>
    <div>
        <ul>
            <li>
                <button class="flex items-center pt-4 space-x-2 text-pink-500">
                    <eye class="w-5 h-5" />
                    <span class="block">Show all 34 comments</span>
                </button>
            </li>
            <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" @eventChild="eventChild"
                @eventDeleteChild="eventDeleteChild"  />
        </ul>

        <!-- comment form -->
        <form v-if="showForm" @submit.prevent="addComment" class="flex w-full py-4 space-x-4">
            <div>
                <img class="rounded-[50%] w-[30px] h-auto object-cover" src="../../assets/images/john-doe.jpg"
                    alt="avatar">
            </div>
            <div class="flex flex-col w-full">
                <textarea v-model="form.commentText"
                    class="block w-full h-10 px-4 text-sm bg-white border border-gray-100 border-solid rounded-3xl"
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
import { ref, reactive } from "vue";
import eye from '@/assets/images/icons/eye.svg'
import { v4 as uuidv4 } from "uuid";
import CommentItem from "./CommentItem.vue";

defineEmits(['eventChild', 'deleteComment', 'eventDeleteChild'])

const comments = reactive([
    {
        id: 1,
        author: "Dolores",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto temporibus ut vero aspernatur dolor animi hic impedit saepe, incidunt eaque nihil fugit blanditiis, tenetur dicta? Omnis id laudantium repellat?",
        replies: [
            {
                id: 2,
                author: "Peter",
                text: "Illum repudiandae corrupti voluptas dolores ratione excepturi dolorum quaerat quidem accusamus hic ullam cumque nesciunt possimus earum laudantium molestias magni nostrum dolorem, ab temporibus architecto pariatur id quam porro. Amet!",
                replies: []
            },
            {
                id: 3,
                author: "Potter",
                text: "Ex at eveniet cupiditate sint fugiat dolorum, soluta asperiores reiciendis. Dolorum earum expedita minima suscipit animi modi sed, quo aliquid placeat neque, excepturi maiores deserunt praesentium non iste. Perferendis, aspernatur?",
                replies: [
                    {
                        id: 4,
                        author: "Lily",
                        text: "Saepe labore, ipsam temporibus, consectetur, dolorem neque incidunt iusto sint quia nulla quaerat veritatis maxime aliquid debitis qui doloribus? Veritatis accusamus consectetur, natus enim ad voluptates modi officia aspernatur dolores?",
                        replies: []
                    },
                ]
            }
        ]
    }
])

const showForm = ref(true)

const form = reactive({
    commentText: null,
    lastParent: null
})

function addComment() {
    let item = {
        id: uuidv4(),
        author: 'Alex',
        text: form.commentText,
        replies: []
    };
    comments.push(item);
    form.commentText = '';
    showForm.value = false
}

function eventChild(data) {
    form.lastParent = data.parent_id;
    let item = {
        id: uuidv4(),
        author: 'Alex',
        text: data.text,
        replies: []
    };
    let comment = recursiveFind(comments, data.parent_id);

    if (comment) {
        comment.replies.push(item);
    }
}

function eventDeleteChild(data) {
    let comment = recursiveFind(comments, data.parent.id);
    if (comment) {
        comment.replies = comment.replies.filter((item) => item.id !== data.item.id);
    }
}


function recursiveFind(replies, id) {
    if (replies) {
        for (let i = 0; i < replies.length; i++) {
            if (replies[i].id === id) {
                return replies[i];
            }
            let found = recursiveFind(replies[i].replies, id);
            if (found) return found;
        }
    }
}

</script>

<style lang="scss" scoped>
</style>