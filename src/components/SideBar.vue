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
                    <div class="border-r border-solid border-[#e7edf2] pb-4  px-4 w-full bg-[#f8f9fb] py-[90px]">
                        <PanelMenu />
                    </div>
                </perfect-scrollbar>
            </div>
        </div>
    </div>
</template>

<script setup>
import UserCard from '../components/UserCard.vue'
import PanelMenu from '../components/PanelMenu.vue'
import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    XIcon,
} from '@heroicons/vue/outline'
import { ref } from 'vue'

const sidebarOpen = ref(false)

</script>

<style lang="scss" scoped>
</style>