<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Student Info</h1>

    <button @click="OpenModal" class="bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer">
      Add Student
    </button>

    <table class="w-full border-collapse border border-gray-300 mb-4">
      <thead class="bg-gray-200">
      <tr>
        <th class="border px-2 py-1">NO</th>
        <th class="border px-2 py-1">NAME</th>
        <th class="border px-2 py-1">AGE</th>
        <th class="border px-2 py-1">MAJOR</th>
        <th class="border px-2 py-1">ACTIONS</th>
      </tr>
      </thead>

      <tbody>
      <!-- Students from Pagination -->
      <tr v-for="s in tblstudent" :key="s.id">
        <td class="border px-2 py-1">{{ s.id }}</td>
        <td class="border px-2 py-1">{{ s.name }}</td>
        <td class="border px-2 py-1">{{ s.age }}</td>
        <td class="border px-2 py-1">{{ s.major }}</td>
        <td class="border px-2 py-1 space-x-2">
          <button @click="EditModel(s)" class="bg-yellow-400 px-2 py-1 rounded">Edit</button>
          <button @click="DeleteModel(id)" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- PAGINATION UI -->
    <div class="flex justify-center items-center space-x-2 mb-4">
      <button class="px-3 py-1 border rounded">Prev</button>

      <button class="px-3 py-1 border rounded bg-blue-500 text-white font-bold">
        1
      </button>
      <button class="px-3 py-1 border rounded">2</button>
      <button class="px-3 py-1 border rounded">3</button>

      <button class="px-3 py-1 border rounded">Next</button>
    </div>

    <!-- Modal Placeholder -->
    <div>
      <!-- EditModal will appear here -->
      <Modal v-if="showModal" @close="Close" :st="selectdStudent" @saveStudent="save"/>
    </div>
  </div>
</template>
<script setup>
import {reactive, ref} from 'vue'
import Modal from './EditModel.vue'

const selectdStudent = ref(null);
const isAdd = ref(false);

const tblstudent = reactive([
  {id: 1, name: "Vireak", age: 22, major: "Computer Science"},
])
const showModal = ref(false)
const OpenModal = () => {

  selectdStudent.value = {id: "", name: "", age: "", major: ""}
  showModal.value = true;
}
const Close = () => {
  showModal.value = false;
}
const save = (NewStudent) => {
  // isAdd.value = true;
  if(isAdd.value) tblstudent.push(NewStudent);
  else {
    const index = tblstudent.findIndex(s => s.id == NewStudent.id)
    if (index != -1) tblstudent[index] = NewStudent;
  }
  Close();
}

const EditModel = (st) => {
  selectdStudent.value = {...st}
  showModal.value = true;

}

const DeleteModel = (id) => {
  tblstudent.splice(id, 1);
}
</script>
