<template>
    <div class="max-w-7xl m-auto space-y-4">
        <h1 class="text-2xl font-bold text-center">Grade Evaluator</h1>

        <div class="flex justify-center gap-2">
            <input v-model="score" class="border rounded-sm p-2 focus:ring-2 focus:ring-blue-500" type="number">
            <button class="bg-blue-500 text-white px-2 py-2 rounded-sm hover:bg-blue-600">Evaluate</button>
        </div>
        <p v-if="score == '' || score == 0" class="text-center">Please Enter score to Ecaluate</p>
        <p v-else-if="score >= 80 && score <= 100" class="text-center">Grade: A</p>
        <p v-else-if="score >= 70 && score <= 79" class="text-center">Grade: B</p>
        <p v-else-if="score >= 60 && score <= 69" class="text-center">Grade: C</p>
        <p v-else-if="score >= 50 && score <= 59" class="text-center">Grade: D</p>
        <p v-else class="text-center">Grade: F</p>
    </div>
</template>


<script setup>
import { ref } from 'vue'
const score = ref(0)
</script>