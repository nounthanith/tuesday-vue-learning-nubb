<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-80 bg-white border rounded-xl p-6 text-center shadow">
            <h2 class="text-xl font-bold mb-4">Simple Calculator</h2>

            <div class="flex justify-center gap-2 mb-4">
                <input type="number" v-model="num1"
                    class="w-20 border rounded-md text-center py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />

                <select v-model="operator"
                    class="border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                </select>

                <input type="number" v-model="num2"
                    class="w-20 border rounded-md text-center py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <button @click="calculate" class="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 mb-4">
                Calculate
            </button>

            <p class="text-lg font-semibold">
                Result:
                <span class="font-bold text-black">{{ result }}</span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const num1 = ref(0)
const num2 = ref(0)
const operator = ref('+')
const result = ref(0)

const calculate = () => {
    if (num1.value === 0 || num2.value === 0) result.value('Please enter a valid number')

    if (operator.value === '+') result.value = num1.value + num2.value
    else if (operator.value === '-') result.value = num1.value - num2.value
    else if (operator.value === '*') result.value = num1.value * num2.value
    else if (operator.value === '/') result.value = num1.value / num2.value
}
</script>

<style>
body {
    font-family: "Arial", sans-serif;
}
</style>
