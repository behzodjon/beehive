<template>
    <div :class="[isMenuVisible ? 'fixed ml-[80%]' : '']" class="w-full h-full overflow-x-hidden smooth-transition">
        <!-- sidebar -->
        <div class="
        w-4/5
        md:translate-x-0 md:w-20 xl:w-[22%]
        fixed
        z-30
        h-full
        left-0
        t-0
     smooth-transition
      " :class="isMenuVisibleClass">
            <!-- menu -->
            <SideBarMenu />
        </div>

        <!-- mobile under menu overlay -->
        <div class="fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 md:hidden" v-if="isMenuVisible"
            @click="toggleMobileMenu"></div>



        <!-- content block -->
        <div class="md:pl-20 xl:pl-[22%] flex flex-col">
            <div :class="[windowTop > 0 ? 'md:h-[60px] -top-[44px] md:top-0' : 'md:h-20 top-0']"
                class="fixed z-10 flex flex-shrink-0 w-full bg-white shadow smooth-transition">
                <div class="flex flex-col w-full md:hidden">
                    <div class="flex items-center px-4 py-2 bg-pink-500 xl:hidden primary-gradient h-11">
                        <button type="button" class="pr-4 text-white focus:outline-none md:hidden"
                            @click="toggleMobileMenu">
                            <span class="sr-only">Open sidebar</span>
                            <XIcon v-if="isMenuVisible" class="w-6 h-6" aria-hidden="true" />
                            <MenuAlt2Icon v-else class="w-6 h-6" aria-hidden="true" />
                        </button>
                        <form class="flex w-full bg-transparent md:ml-0" action="#" method="GET">
                            <label for="search-field" class="sr-only">Search</label>
                            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                    <search class="w-4 h-4 text-white xl:text-gray-200" />
                                </div>
                                <input id="search-field"
                                    class="block w-full h-full pt-0 pb-1 pl-6 pr-3 text-sm text-white placeholder-white bg-transparent border-t-0 border-b border-white/40 xl:placeholder-gray-500 xl:text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent border-x-0"
                                    placeholder="Search..." type="search" name="search" />
                            </div>
                        </form>

                        <div class="relative flex items-center pl-2 space-x-1">
                            <div class="flex items-center justify-center w-6 h-6 ">
                                <img class="rounded-[50%] w-full h-full object-cover"
                                    src="../assets/images/john-doe.jpg" alt="avatar">
                            </div>

                        </div>
                    </div>
                    <AlertList />
                </div>
                <div class="hidden md:flex justify-between w-full pl-[25px] pr-[95px]">
                    <div class="flex w-full px-4">
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
                    <div class="flex items-center w-full ml-4 md:ml-6">
                        <ul class="flex">
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <BaseAlertDropdown title="Friends requests" text="No friend request.">
                                            <UserPlus class="w-4 h-4 text-[#626c72] " />
                                        </BaseAlertDropdown>
                                    </div>
                                </div>
                            </li>
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <BaseAlertDropdown title="Notifications" text="No notifications found">
                                            <bell class="w-4 h-4 text-[#626c72] " />
                                        </BaseAlertDropdown>
                                    </div>
                                </div>
                            </li>
                            <li class="relative">
                                <div class="relative block px-2">
                                    <div
                                        class="bg-gray-400 text-base rounded-[50%] w-8 h-8 flex justify-center items-center">
                                        <BaseAlertDropdown title="Unread messages" text="No messages to read.">
                                            <EnvelopeOpen class="w-4 h-4 text-[#626c72] " />
                                        </BaseAlertDropdown>
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
                                    <span class="block text-dark-200">@ user</span>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <main>
                <div class="w-full px-4 mx-auto mt-20">
                    <slot />
                </div>
            </main>
        </div>

        <!-- message box -->
        <MessageBox />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
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
import BaseAlertDropdown from '../components/BaseAlertDropdown.vue'
import { useStore } from "vuex";
import SideBarMenu from '../components/SideBarMenu.vue'
import AlertList from '../components/AlertList.vue'
const store = useStore();
const windowTop = ref(false)

const isMenuVisible = computed(() => store.state.mobileMenu.isVisible);
const isMenuVisibleClass = computed(() => isMenuVisible.value ? "-translate-x-0" : "-translate-x-full");

function changeNavbar() {
    windowTop.value = window.top.scrollY
}

function toggleMobileMenu() {
    store.commit("toggleMobileMenu");
}

onMounted(() => {
    window.addEventListener('scroll', changeNavbar);
})

onUnmounted(() => {
    window.removeEventListener('scroll', changeNavbar);
})




</script>
