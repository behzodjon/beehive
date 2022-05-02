<template>
    <div class="max-w-[250px] mx-auto bg-white px-8 py-6 rounded-[12px] mt-4">
        <div>
            <a href="'/'" class="profile-avatar relative flex justify-center">
                <img class="w-[50px] rounded-[50%] h-auto" src="../assets/images/john-doe.jpg" alt="avatar">
            </a>
            <div class="flex flex-col mt-3">
                <a href="#" class="text-center">John Doe</a>
                <small class="text-center">Member</small>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.profile-avatar:before {
    content: url('../assets/images/ring.png');
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -6px;
}
</style>