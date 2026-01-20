<template>
    <div class="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white mt-5">
        <h1 class="text-2xl font-bold text-center mb-4">Total Price Calculator</h1>

        <label for="originalPrice" class="block text-gray-700">Original Price</label>
        <input type="number" id="originalPrice" v-model="originalPrice"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />

        <label for="discountPercentage" class="block text-gray-700 mt-4">Discount Percentage</label>
        <input type="number" id="discountPercentage" v-model="discountPercentage"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />

        <h2 class="text-xl font-semibold text-center mt-4">
            Total Price After Discount: <span :class="{'text-red-500 text-2xl': totalPriceAfterDiscount<=0}" class="font-bold text-blue-700">
                {{ totalPriceAfterDiscount }}
            </span>
        </h2>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';


const originalPrice = ref(null)
const discountPercentage = ref(null)

const totalPriceAfterDiscount = computed(() => {
    return originalPrice.value - (originalPrice.value * discountPercentage.value / 100)
})


</script>
