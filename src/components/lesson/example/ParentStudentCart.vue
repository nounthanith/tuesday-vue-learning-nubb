<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Student Gallery</h1>

    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <StudentCard :stCart="students" @view="viewOne"/>
    </div>
    <hr class="mt-4 mb-6"/>
    <h2 class="text-2xl font-bold text-center">Display Cart When you click</h2>
    <div>
      <div
          class="bg-blue-100 rounded-2xl p-4 flex flex-col items-center w-64 hover:scale-105 transform transition duration-300">
        <img :src="'https://i.pravatar.cc/100?img=1' " alt="Avatar" class="w-24 h-24 rounded-full mb-3"/>

        <h2 class="text-lg font-bold text-gray-800">{{studentClick}}</h2>
        <p class="text-gray-600">Age: <span>{{studentClick}}</span></p>
        <p class="text-gray-600">Major: <span>{{studentClick}}</span></p>

        <div
            class="mt-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
            haha
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import StudentCard from "./StudentCard.vue";

const students = ref([
  {no: 1, name: 'Alice', age: 21, major: 'Computer Science', badge: 'Top Student'},
  {no: 2, name: 'Bob', age: 22, major: 'Mathematics'},
  {no: 3, name: 'Charlie', age: 20, major: 'Physics', badge: 'Star'},
  {no: 4, name: 'Daniel', age: 23, major: 'Chemistry'},
  {no: 5, name: 'Eva', age: 24, major: 'SE'},
  {no: 6, name: 'Frank', age: 22, major: 'IT'},
])

const studentClick = ref(null);
const viewOne = (st) => {
  studentClick.value = st;

}
</script>
