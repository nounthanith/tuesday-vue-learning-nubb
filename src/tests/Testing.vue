<template>
  <div class="w-1/2 bg-gray-100 mt-5 p-5 m-auto rounded-xl shadow-2xl">
    <h2 class="text-4xl text-center font-bold mb-3">Grade Evaluator</h2>
    <input v-model.number="score" class="w-full text-xl p-3 rounded border hover:border-yellow-500 hover:border-2"
      type="number" placeholder="Enter score" />
    <button @click="showMsg" class="bg-blue-500 text-white p-3 rounded-md mt-3 w-full hover:cursor-pointer">Evaluate</button>

    <p v-if="score === ''" class="text-2xl text-center mt-2">Please enter the score to evaluate.</p>

    <p v-else-if="score >= 90" class="text-2xl text-center mt-2">Excellent</p>
    <p v-else-if="score >= 80" class="text-2xl text-center mt-2">Very Good</p>
    <p v-else-if="score >= 70" class="text-2xl text-center mt-2">Good</p>
    <p v-else class="text-2xl text-center mt-2">Fail</p>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const score = ref("")
const show = false

const showMsg = () => {
    show = true
}

</script>
