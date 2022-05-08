<template>
    <div>
        <!-- mobile view -->
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="fixed inset-0 z-40 flex md:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </TransitionChild>
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full" enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                    leave-to="-translate-x-full">
                    <div class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-dark">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                            enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                            leave-to="opacity-0">
                            <div class="absolute top-0 right-0 pt-2 -mr-12">
                                <button type="button"
                                    class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    @click="sidebarOpen = false">
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex items-center flex-shrink-0 px-4">
                            <img class="w-auto h-8" src="../assets/images/logo.svg" alt="Workflow" />
                        </div>
                        <div class="flex-1 h-0 mt-5 overflow-y-auto">

                        </div>
                    </div>
                </TransitionChild>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:flex md:w-[22%] md:flex-col md:fixed md:inset-y-0 relative">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-col items-center flex-1 w-full min-h-0 sidebar">
                <perfect-scrollbar class="w-full pb-20">

                    <!-- panel dark -->
                    <div class="w-full px-4 pt-10 pb-4 bg-linear bg-dark-100">
                        <div class="flex items-center justify-center flex-shrink-0 w-full">
                            <img class="max-h-[105px]  max-w-[80%]" src="../assets/images/logo.svg" alt="Beehive" />
                        </div>
                        <!-- user card -->
                        <UserCard />
                    </div>

                    <!-- panel light -->
                    <div class="border-r border-solid border-[#e7edf2] pb-4  px-4 w-full bg-gray-400 py-[90px]">
                        <ThePanelMenu />
                    </div>
                </perfect-scrollbar>
            </div>
        </div>

        <!-- content block -->
        <div class="md:pl-[22%] flex flex-col">
            <div class="sticky top-0 z-10 flex flex-shrink-0 h-20 bg-white shadow">
                <button type="button"
                    class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
                </button>
                <div class="flex justify-between flex-1 pl-[25px] pr-[95px]">
                    <div class="flex flex-1 px-4">
                        <form class="flex w-full md:ml-0" action="#" method="GET">
                            <label for="search-field" class="sr-only">Search</label>
                            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                    <search class="w-4 h-4 text-[#626c72]" />
                                </div>
                                <input id="search-field"
                                    class="block w-full h-full py-2 pl-6 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                    placeholder="Search..." type="search" name="search" />
                            </div>
                        </form>
                    </div>
                    <div class="flex items-center ml-4 md:ml-6">
                        <ul class="flex">
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <UserPlus class="w-4 h-4 text-[#626c72] " />
                                    </div>
                                </div>
                            </li>
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <bell class="w-4 h-4 text-[#626c72] " />
                                    </div>
                                </div>
                            </li>
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <EnvelopeOpen class="w-4 h-4 text-[#626c72] " />
                                    </div>
                                </div>
                            </li>
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <ShoppingBag class="w-4 h-4 text-[#626c72] " />
                                    </div>
                                </div>
                            </li>
                            <li class="relative">
                                <div class="relative flex items-center pl-2 space-x-1">
                                    <div class="flex items-center justify-center w-8 h-8 ">
                                        <img class="rounded-[50%] w-full h-full object-cover"
                                            src="../assets/images/john-doe.jpg" alt="avatar">
                                    </div>
                                    <span class="block text-[#29292d]">@ user</span>

                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <main>
                <div class="w-full px-4 mx-auto">
                    <slot />
                </div>
            </main>
        </div>
        <MessageBox />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    MenuAlt2Icon,
    XIcon,
} from '@heroicons/vue/outline'
import UserCard from '../components/UserCard.vue'
import ThePanelMenu from '../components/ThePanelMenu.vue'
import search from '../assets/images/icons/search.svg'
import UserPlus from '../assets/images/icons/user-plus.svg'
import bell from '../assets/images/icons/bell.svg'
import EnvelopeOpen from '../assets/images/icons/envelope-open.svg'
import ShoppingBag from '../assets/images/icons/shopping-bag.svg'
import MessageBox from '../components/MessageBox.vue'



const sidebarOpen = ref(false)

</script>
