<script setup>
import { reactive } from 'vue';

const me = reactive({
    name: "Nuon Thanith",
    gender: "Male",
    pob: "Phnom Penh"
})

const changeName = () => {
    me.name = "Thanith"
    me.gender = "Male"
    me.pob = "Battambang"
}

const reset = () => {
    window.location.reload()
}

</script>

<template>
    <div class="border-2 border-black text-black w-sm p-8 rounded-lg text-xl font-bold">
        <h1>Name: <span class="text-rose-500">{{ me.name }}</span></h1>
        <p>Gender: <span class="text-yellow-300">{{ me.gender }}</span></p>
        <p>POB: <span class="text-green-500">{{ me.pob }}</span></p>
        <div class="flex gap-2">
            <button @click="changeName"
                class="border-2 border-black rounded-sm text-black px-2 py-1 mt-2 cursor-pointer active:scale-95 hover:scale-105 transition-all">
                Click me
            </button>
            <button @click="reset"
                class="border-2 border-black rounded-sm text-black px-2 py-1 mt-2 cursor-pointer active:scale-95 hover:scale-105 transition-all">
                Reload
            </button>
        </div>
    </div>
</template>
