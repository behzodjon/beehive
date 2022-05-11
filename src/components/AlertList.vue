<template>
    <div>
        <ul class="flex justify-between px-4 py-1">
            <li class="relative">
                <div class="relative block px-2">
                    <div class="lg:bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                        <BaseAlertDropdown title="Friends requests" text="No friend request.">
                            <UserPlus class="w-[18px] h-[18px] lg:w-4 lg:h-4 text-[#626c72] " />
                        </BaseAlertDropdown>
                    </div>
                </div>
            </li>
            <li class="relative">
                <div class="relative block px-2">
                    <div class="lg:bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                        <BaseAlertDropdown title="Notifications" text="No notifications found">
                            <bell class="w-[18px] h-[18px] lg:w-4 lg:h-4 text-[#626c72] " />
                        </BaseAlertDropdown>
                    </div>
                </div>
            </li>
            <li class="relative">
                <div class="relative block px-2">
                    <div class="lg:bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                        <BaseAlertDropdown title="Unread messages" text="No messages to read.">
                            <EnvelopeOpen class="w-[18px] h-[18px] lg:w-4 lg:h-4 text-[#626c72] " />
                        </BaseAlertDropdown>
                    </div>
                </div>
            </li>
            <li class="relative">
                <div class="relative block px-2">
                    <div class="lg:bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                        <ShoppingBag class="w-[18px] h-[18px] lg:w-4 lg:h-4 text-[#626c72] " />
                    </div>
                </div>
            </li>
            <li class="relative hidden lg:block">
                <div class="relative flex items-center pl-2 space-x-1">
                    <div class="flex items-center justify-center w-8 h-8 ">
                        <img class="rounded-[50%] w-full h-full object-cover" src="../assets/images/john-doe.jpg"
                            alt="avatar">
                    </div>
                    <span class="block text-dark-200">@ user</span>

                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import BaseAlertDropdown from '../components/BaseAlertDropdown.vue'
import UserPlus from '../assets/images/icons/user-plus.svg'
import bell from '../assets/images/icons/bell.svg'
import EnvelopeOpen from '../assets/images/icons/envelope-open.svg'
import ShoppingBag from '../assets/images/icons/shopping-bag.svg'
</script>

<style  scoped>
</style>