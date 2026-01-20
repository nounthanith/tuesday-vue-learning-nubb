<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-80 bg-white shadow-md rounded-xl p-6 text-center">
            <h2 class="text-lg font-bold mb-2">Increment App</h2>

            <p class="text-xl font-semibold mb-4">
                Counter: 
                <span
                    :class="[counter < 0 ? 'text-red-500' : counter === 0 ? 'text-yellow-500' : 'text-green-500']">
                    {{ counter }}
                </span>
            </p>

            <div class="flex justify-center gap-3">
                <button @click="decrement" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    -
                </button>
                <button @click="increment" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    +
                </button>
                <button @click="reset" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Reset
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0)

const increment = () => {
    counter.value++
}

const decrement = () => {
    counter.value--
}

const reset = () => {
    counter.value = 0
}
</script>

<style>
body {
    font-family: "Arial", sans-serif;
}
</style>
