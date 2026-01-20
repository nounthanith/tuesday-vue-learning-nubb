<template>
  <div class="p-10 bg-gray-50 min-h-screen w-full">
    <div class="bg-white shadow rounded-2xl p-6 w-1/2 mx-auto">
      <h1 class="text-2xl font-bold mb-6 border-b pb-2">Todo App</h1>

      <!-- Add / Update Todo -->
      <form @submit.prevent="addOrUpdateTodo" class="flex mb-4">
        <input
          v-model="newTodo"
          type="text"
          placeholder="Add a new task..."
          class="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          class="px-4 py-2 rounded-r-lg text-white transition bg-black hover:bg-black/70"
        >
          'Add' 'Update'
        </button>
      </form>

      <!-- Filter Buttons -->
      <div class="flex space-x-2 mb-4">
        <button class="px-3 py-1 rounded">All</button>
        <button class="px-3 py-1 rounded">Done</button>
        <button class="px-3 py-1 rounded">Not Done</button>
      </div>

      <!-- Todo List -->
      <ul class="space-y-2">
        <li
          v-for="(item, index) in tblNote"
          :key="index"
          class="flex justify-between items-center border-b pb-1"
        >
          <div class="flex items-center space-x-2">
            <!-- Done Checkbox -->
            <input type="checkbox" />

            <!-- Todo Text -->
            <span>{{ item }}</span>
          </div>

          <!-- Buttons -->
          <div class="space-x-2">
            <button @click="editTodo(index)" class="text-blue-600 hover:underline">
              Edit
            </button>
            <button @click="removeTodo(index)" class="text-red-500 hover:underline">
              Delete
            </button>
          </div>
        </li>
      </ul>
      <!-- No items message -->
      <p v-if="tblNote.length === 0" class="text-gray-400 mt-4 text-center">
        No tasks to display.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const tblNote = ref(['Write what you want to note here.']);
const editing = ref(null);

function addOrUpdateTodo() {
  if (editing.value === null) tblNote.value.push(newTodo.value);
  else {tblNote.value[editing.value] = newTodo.value;editing.value = null;}
  newTodo.value = '';
}

function editTodo(index) {
  newTodo.value = tblNote.value[index];
  editing.value = index;
}

function removeTodo(index) {
  tblNote.value.splice(index, 1);
}
</script>
