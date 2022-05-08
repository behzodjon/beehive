<template>
    <div>
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="inline-flex justify-center w-full px-4 py-2 ">
                    <slot />
                </MenuButton>
            </div>
            <MenuItems
                class="absolute right-0 z-30 w-40 py-1 mt-2 origin-top-right bg-white border-none rounded-xl min-w-[280px] max-w-[280px] top-14">
                <div>
                    <MenuItem>
                    <div>
                    <div class="border-b  px-6 border-gray-100 border-solid text-sm text-[#212529] py-1 font-semibold">{{title}}</div>
                    <div class="px-6 py-2 border-b border-gray-100 border-solid">
                        <div class="px-5 py-3 text-sm text-yellow-400 bg-yellow-100 border border-yellow-200 border-solid rounded">{{text}}</div>
                    </div>
                    <div class="px-6 py-2">
                        <button class="w-full text-pink-500 bg-transparent border border-pink-500 rounded-[30px] px-8 py-[0.375rem] text-sm hover:bg-pink-500 hover:text-white transition-all duration-500">All Requests</button>
                    </div>
                    </div>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
defineProps({
    title: String,
    text: String,
})
</script>

<style  scoped>
</style>