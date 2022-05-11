<template>
    <div class="w-full max-w-[250px] mx-auto text-[#838daa]">
        <ul class="grid grid-cols-2 text-center md:grid-cols-1 xl:grid-cols-2 xl:px-7">
            <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <notebooks class="w-[18px] h-[18px] text-pink-500" />
                    <span class="font-medium text-center text-pink-500 md:hidden xl:block">Activity</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <photo class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Photos</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <play class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Watch</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <user class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">People</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <users class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Groups</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <tvRetro class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Adverts</span>
                </router-link>
            </li>  <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <shoppingCart class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Shop</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <briefcase class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Jobs</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <comments class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Forums</span>
                </router-link>
            </li>
              <li class="w-full">
                <router-link class="flex flex-col items-center px-1 py-4 transition duration-500 hover:text-pink-500" :to="'#'">
                    <newspaper class="w-[18px] h-[18px]  " />
                    <span class="text-center md:hidden xl:block ">Blog</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import notebooks from '../assets/images/icons/notebooks.svg'
import photo from '../assets/images/icons/photo.svg'
import play from '../assets/images/icons/play.svg'
import user from '../assets/images/icons/user.svg'
import users from '../assets/images/icons/users.svg'
import tvRetro from '../assets/images/icons/tv-retro.svg'
import shoppingCart from '../assets/images/icons/shopping-cart.svg'
import briefcase from '../assets/images/icons/briefcase.svg'
import comments from '../assets/images/icons/comments.svg'
import newspaper from '../assets/images/icons/newspaper.svg'


</script>

<style >

</style>