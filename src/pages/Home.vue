<template>
    <div class="grid grid-cols-3">
        <div class="min-h-screen col-span-2 px-10 pt-8 border-r border-gray-100 border-solid">
            <ActivityForm />
            <Posts />
        </div>
    </div>
</template>

<script setup>
import ActivityForm from "../components/activity/ActivityForm.vue";
import Posts from "../components/activity/Posts.vue";


</script>

