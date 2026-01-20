<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <h1 class="text-4xl font-bold text-center text-blue-900 mb-10">
      Student Entry Form
    </h1>

    <!-- Form Container -->
    <div class="bg-white p-8 rounded-xl shadow max-w-4xl mx-auto">

      <!-- Student Name -->
      <h2 class="text-xl font-semibold text-blue-900 mb-3">Student Name</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <input v-model="firstName" placeholder="First" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
        <input v-model="lastName" placeholder="Last" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
      </div>

      <!-- Grade + Age -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label class="font-semibold text-blue-900">Grade</label>
          <input v-model="grade" type="number" class="w-full border-2 border-yellow-400 p-3 rounded-md mt-1" />
        </div>

        <div>
          <label class="font-semibold text-blue-900">Age</label>
          <input v-model="age" type="number" class="w-full border-2 border-yellow-400 p-3 rounded-md mt-1" />
        </div>
      </div>

      <!-- Address -->
      <h2 class="text-xl font-semibold text-blue-900 mb-3">Address</h2>

      <input v-model="streetAddress" placeholder="Street Address"
        class="w-full border-2 border-yellow-400 p-3 rounded-md mb-4" />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <input v-model="city" placeholder="City" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
        <input v-model="region" placeholder="Region" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <select v-model="country" class="w-full border-2 border-yellow-400 p-3 rounded-md">
          <option>Cambodia</option>
          <option>Vietnam</option>
          <option>Laos</option>
        </select>
      </div>

      <!-- Error Message -->
      <p v-if="errorMessage" class="text-red-600 text-center mb-4">
        {{ errorMessage }}
      </p>

      <!-- Buttons -->
      <div class="text-center mt-4">
        <button @click="addStudent" class="bg-blue-600 px-2 py-3 rounded-md text-white text-xl mr-4">
          Add Student
        </button>

        <button @click="updateStudent" class="bg-green-600 px-2 py-3 rounded-md text-white text-xl">
          Update Student
        </button>

        <button @click="cancelEdit" class="bg-gray-600 px-2 py-3 rounded-md text-white text-xl ml-4">
          Cancel
        </button>
      </div>

    </div>

    <!-- Student List -->
    <h2 class="text-3xl font-bold text-center mt-12 mb-6">Student List</h2>

    <transition-group name="fade" tag="ul" class="max-w-4xl mx-auto space-y-4">
      <li v-for="(s, index) in students" :key="s.id" class="bg-white p-6 rounded shadow flex justify-between">
        <div>
          <p><b>Name:</b> {{ s.firstName }} {{ s.lastName }} </p>
          <p><b>Grade:</b> {{ s.grade }} <b>Age:</b> {{ s.age }} </p>
          <p><b>Address:</b> {{ s.street }}, {{ s.city }}, {{ s.region }}, {{ s.country }} </p>

        </div>

        <div class="flex space-x-3">
          <button @click="editStudent(index)" class="text-yellow-500 font-bold">Edit</button>
          <button @click="deleteStudent(index)" class="text-red-500 font-bold">Delete</button>
        </div>
      </li>
    </transition-group>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const students = ref([]);
const errorMessage = ref("");
const firstName = ref('');
const lastName = ref('');
const grade = ref(null);
const age = ref(null);
const streetAddress = ref('');
const city = ref('');
const region = ref('');
const country = ref('Cambodia');

const editIndex = ref(null);

function addStudent () {
  if (!firstName.value || !lastName.value || !grade.value || !age.value || !streetAddress.value || !city.value || !region.value || !country.value) {
    errorMessage.value = "Please fill all required fields";
    return;
  }
  students.value.push({
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    grade: grade.value,
    age: age.value,
    street: streetAddress.value,
    city: city.value,
    region: region.value,
    country: country.value,
  });
  clearForm();
  errorMessage.value = "";
}

function deleteStudent(index) {
  students.value.splice(index, 1);
}

function editStudent(index) {
  const student = students.value[index];
  editIndex.value = index;
  firstName.value = student.firstName;
  lastName.value = student.lastName;
  grade.value = student.grade;
  age.value = student.age;
  streetAddress.value = student.street;
  city.value = student.city;
  region.value = student.region;
  country.value = student.country;
}

function updateStudent() {
  if (editIndex.value === null) return;
    if (!firstName.value || !lastName.value || !grade.value || !age.value || !streetAddress.value || !city.value || !region.value || !country.value) {
    errorMessage.value = "Please fill all required fields";
    return;
  }
  students.value[editIndex.value] = {
    ...students.value[editIndex.value],
    firstName: firstName.value,
    lastName: lastName.value,
    grade: grade.value,
    age: age.value,
    street: streetAddress.value,
    city: city.value,
    region: region.value,
    country: country.value,
  };
  clearForm();
  editIndex.value = null;
  errorMessage.value = "";
}

function cancelEdit() {
  clearForm();
  editIndex.value = null;
}

function clearForm() {
    firstName.value = '';
    lastName.value = '';
    grade.value = null;
    age.value = null;
    streetAddress.value = '';
    city.value = '';
    region.value = '';
    country.value = 'Cambodia';
}
</script>

<style>
.btn-green {
  background-color: #16a34a;
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 18px;
}

.btn-gray {
  background-color: #6b7280;
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 18px;
}

/* Animation */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}
</style>
