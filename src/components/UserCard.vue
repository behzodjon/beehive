<template>
    <div class="max-w-[250px]  bg-white px-8 py-6 rounded-[12px] mt-4 w-full mx-auto">
        <div>
            <router-link href="#" class="profile-avatar relative flex justify-center">
                <img class="w-[50px] rounded-[50%] h-auto" src="../assets/images/john-doe.jpg" alt="avatar">
            </router-link>
            <div class="flex flex-col mt-3">
                <router-link to="#" class="text-center text-base font-semibold text-dark-200">John Doe</router-link>
                <small class="text-center text-[#bbbbdc] leading-[1.5] text-[85%]">Member</small>
                <ul class="mt-3 pt-2 border-t border-solid border-[#e7edf2] text-center">
                    <li class="inline-block px-2 leading-[1.75] text-center">
                        <span class="text-base font-semibold">1</span>
                        <p class="text-[#bbbbdc] text-[90%]">Friends</p>
                    </li>
                    <li class="inline-block px-2 leading-[1.75] text-center">
                        <span class="text-base font-semibold">5</span>
                        <p class="text-[#bbbbdc] text-[90%]">Groups</p>
                    </li>
                </ul>
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