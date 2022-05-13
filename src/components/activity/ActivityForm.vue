<template>
    <div class="relative px-8 py-10 mb-10 bg-white rounded-xl activity-form">
        <!-- form -->
        <form class="relative">
            <div>
                <div class="flex space-x-4">
                    <router-link to="#">
                        <img class="w-16 h-auto rounded-full xl:w-10"
                            src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1650303361-bpthumb.jpg"
                            alt="">
                    </router-link>
                    <div class="relative">
                        <textarea :class="[textAreaFocus ? 'h-auto border-none' : 'h-10 border-gray-100']"
                            @focus.native="textAreaFocus = true" placeholder="What's new, Basenane?" cols="50" rows="4"
                            class="w-full  text-[90%] px-4 pt-[10px] pb-2 border  border-solid rounded-2xl text-[#626c72] bg-transparent leading-5 placeholder:text-[#626c72] outline-none focus:border-transparent focus:ring-transparent"></textarea>

                    </div>
                </div>
                <!-- attach media -->
                <div v-if="textAreaFocus">
                    <div class="relative py-2 border-t border-b border-gray-100 border-solid">
                        <label for="upload" class="relative flex items-center space-x-1 cursor-pointer">
                            <div class="bg-[#f7f7f7] rounded-[1.25rem] p-2">
                                <paperclip class="w-4 h-4 " />
                            </div>
                            <span class="inline-block bg-[#f7f7f7] rounded-[1.25rem] px-4 py-1 text-pink-500">Attach
                                media</span>
                            <input @change="onImageChoose" type="file" id="upload" class="hidden">
                        </label>
                        <!-- editing images -->
                        <div v-if="form.image_url" class="w-full">
                            <ul class="mt-2">
                                <li
                                    class="relative flex justify-between w-full p-1 mb-2 space-x-1 overflow-hidden bg-gray-400 rounded-xl">
                                    <div class="flex h-full space-x-1 w-9">
                                        <img class=" rounded-xl" :src="form.image_url" alt="form-name">
                                        <span v-if="!editMode" class="block text-[1em] font-medium">{{ form.imageName
                                        }}</span>
                                    </div>
                                    <div v-if="editMode" class="flex flex-col">
                                        <div class="flex flex-col">
                                            <label for="image-title" class="text-[1em] font-medium">Title:</label>
                                            <input v-model="form.imageName" type="text" id="image-title"
                                                class="w-[75%] bg-white block h-10 px-4 py-1 rounded-3xl border border-solid border-gray-100 text-sm">
                                        </div>
                                        <div>
                                            <label for="desc">Description:</label>
                                            <textarea
                                                class="w-[75%] bg-white block h-20 px-4 py-1 rounded-3xl border border-solid border-gray-100 text-sm"
                                                name="" id="" cols="30" rows="50"></textarea>
                                        </div>
                                    </div>
                                    <!-- image actions -->
                                    <div class="flex items-center space-x-1">
                                        <div class="text-gray-50 text-[90%] mr-2">{{ formatBytes(form.imageSize) }}
                                        </div>
                                        <checkCircle @click="editMode = false" v-if="editMode"
                                            class="w-4 h-4 cursor-pointer" />
                                        <pen @click="editMode = true" v-else class="w-4 h-4 cursor-pointer " />
                                        <times class="w-4 h-4 cursor-pointer" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between mt-4 xl:flex-row">
                        <select
                            class="xl:py-1 text-[90%] pl-6 pr-8  bg-transparent border border-gray-100 border-solid rounded-full outline-none focus:outline-none focus:border-pink-500 py-2"
                            name="" id="">
                            <option value="profile">Post in: Profile</option>
                            <option value="post">Post in: Group</option>
                        </select>
                        <div class="flex flex-col-reverse gap-3 mt-4 xl:flex-row xl:mt-0">
                            <input @click="textAreaFocus = false" type="reset"
                                class="text-pink-500 cursor-pointer hover:underline" value="Cancel">
                            <input type="submit"
                                class="py-1 text-xs xl:text-sm primary-btn"
                                value="Post Update">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import paperclip from '../../assets/images/icons/paperclip.svg'
import checkCircle from '../../assets/images/icons/check-circle.svg'
import times from '../../assets/images/icons/times.svg'
import pen from '../../assets/images/icons/pen.svg'


const editMode = ref(false)
const textAreaFocus = ref(false)

const form = reactive({
    image: null,
    imageName: null,
    imageSize: null,
    image_url: null,
})

function onImageChoose(ev) {
    const file = ev.target.files[0];
    form.imageName = file.name;
    form.imageSize = file.size;

    const reader = new FileReader();
    reader.onload = () => {
        // The field to send on backend and apply validations
        form.image = reader.result;
        // The field to display here
        form.image_url = reader.result;
        ev.target.value = "";
    };
    reader.readAsDataURL(file);
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

</script>
<style  scoped>
.activity-form {
    box-shadow: 0 20px 90px rgb(58 46 68 / 5%);
}



.activity-form::before {
    content: "";
    background: #fff;
    height: 95%;
    border-radius: 12px;
    position: absolute;
    left: 1rem;
    right: 1rem;
    margin: auto;
    bottom: -13px;
    z-index: -1;
    box-shadow: 0 20px 90px rgb(58 46 68 / 4%);
}
</style>