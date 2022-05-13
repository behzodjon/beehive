<template>
    <div class="grid grid-cols-1 xl:grid-cols-3">
        <div class="min-h-screen pt-8 border-gray-100 border-solid xl:border-r xl:px-10 xl:col-span-2">
            <ActivityForm />
            <Posts />
        </div>
    </div>
</template>

<script setup>
import ActivityForm from "../components/activity/ActivityForm.vue";
import Posts from "../components/activity/Posts.vue";


</script>

