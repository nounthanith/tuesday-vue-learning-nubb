<script setup>
defineProps({
  studentId: String,
  studentsName: String,
  gender: String,
  age: Number
})
</script>

<template>
  <div class="space-y-2">
    <h1 class="text-xl font-bold">Student Detail</h1>
    <p>ID: {{ studentId }}</p>
    <p>Name: {{ studentsName }}</p>
    <p>Gender: {{ gender }}</p>
    <p>Age: {{ age }}</p>
  </div>
</template>
