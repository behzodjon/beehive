<template>
    <div>
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="inline-flex justify-center w-full px-4 py-2 ">
                    <ellipsis class="w-4 h-7" />
                </MenuButton>
            </div>
            <MenuItems
                class="absolute right-0 z-30 w-40 px-6 py-1 mt-2 origin-top-right bg-white border border-gray-100 border-solid rounded-xl">
                <div>
                    <MenuItem>
                    <div>
                        Mute
                    </div>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ellipsis from '../assets/images/icons/ellipsis.svg'

</script>

<style lang="scss" scoped>
</style>