<template>
  <div v-for="student in stCart"
       class="bg-blue-100 rounded-2xl p-4 flex flex-col items-center w-64 hover:scale-105 transform transition duration-300">
    <img :src="'https://i.pravatar.cc/100?img=' + student.no" alt="Avatar" class="w-24 h-24 rounded-full mb-3"/>

    <h2 class="text-lg font-bold text-gray-800">{{ student.name }}</h2>
    <p class="text-gray-600">Age: <span>{{ student.age }}</span></p>
    <p class="text-gray-600">Major: <span>{{ student.major }}</span></p>

    <div v-if="student.badge"
         class="mt-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
      {{ student.badge }}
    </div>

    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            @click="$emit('view', student)">
      View Details
    </button>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({stCart: Object})

const emits = defineEmits('view')

</script>
