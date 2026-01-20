<template>
  <div class="w-5xl h-screen m-auto">
    <div class="bg-blue-500 text-white p-3">
      <slot name="nav"></slot>
    </div>

    <div class="w-5xl h-fit m-auto bg-yellow-200 text-black p-3 mt-1 mb-1 border rounded-lg">
      <slot name="main" :st="students"></slot>
    </div>

    <div class="w-5xl m-auto bg-blue-500 text-white p-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
  { no: 1, name: 'Alice', age: 21, major: 'Computer Science', badge: 'Top Student' },
  { no: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { no: 3, name: 'Charlie', age: 20, major: 'Physics', badge: 'Star' },
  { no: 4, name: 'Daniel', age: 23, major: 'Chemistry' },
  { no: 5, name: 'Eva', age: 24, major: 'SE' },
  { no: 6, name: 'Frank', age: 22, major: 'IT' },
])
</script>
