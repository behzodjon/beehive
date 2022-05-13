<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="min-h-screen pt-8 border-gray-100 border-solid md:border-r md:px-10 md:col-span-2">
            <ActivityForm />
            <Posts />
        </div>
        <div>
            <Members />
        </div>
    </div>
</template>

<script setup>
import ActivityForm from "../components/activity/ActivityForm.vue";
import Posts from "../components/activity/Posts.vue";
import Members from "../components/Members.vue";


</script>

