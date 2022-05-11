<template>
    <div class="flex flex-col items-center flex-1 w-full h-full min-h-0">
        <perfect-scrollbar class="w-full pb-20">

            <!-- panel dark -->
            <div class="w-full px-4 pt-10 pb-4 bg-linear bg-dark-100 md:h-[136px] xl:h-auto">
                <div class="flex items-center justify-center flex-shrink-0 w-full">
                    <img class="max-h-[105px] md:hidden xl:block max-w-[80%]" src="../assets/images/logo.svg" alt="Beehive" />
                    <img class="hidden max-w-full max-h-full md:block xl:hidden" src="../assets/images/big-logo.svg" alt="Beehive" />
                </div>
                <!-- user card -->
                <UserCard class="md:hidden xl:block" />
            </div>

            <!-- panel light -->
            <div class="border-r border-solid border-[#e7edf2] pb-4  px-4 w-full bg-gray-400 py-20 md:pt-8 xl:py-[90px]">
                <ThePanelMenu />
            </div>
        </perfect-scrollbar>
    </div>
</template>


<script setup>
import UserCard from '../components/UserCard.vue'
import ThePanelMenu from '../components/ThePanelMenu.vue'
</script>

