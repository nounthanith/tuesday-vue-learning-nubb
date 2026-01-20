<template>
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg w-96">
      <h2 class="text-lg font-bold mb-4">
        "Add Student"  "Edit Student"
      </h2>

      <div class="mb-2">
        <label class="block mb-1">ID</label>
        <input v-model="tmptblstudent.id" class="border w-full px-2 py-1 rounded" />
      </div>

      <div class="mb-2">
        <label class="block mb-1">Name</label>
        <input v-model="tmptblstudent.name" class="border w-full px-2 py-1 rounded" />
      </div>

      <div class="mb-2">
        <label class="block mb-1">Age</label>
        <input v-model="tmptblstudent.age" type="number" class="border w-full px-2 py-1 rounded" />
      </div>

      <div class="mb-4">
        <label class="block mb-1">Major</label>
        <input v-model="tmptblstudent.major"  class="border w-full px-2 py-1 rounded" />
      </div>

      <div class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>

        <button @click="saveM" class="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive , defineEmits, defineProps} from 'vue'
const emit = defineEmits(['close','saveM']);

const props = defineProps({
  st: Object
});
const tmptblstudent = reactive({...props.st});

const saveM = () => {
  // Logic to save student info
  emit('saveStudent' , {...tmptblstudent});

}
</script>
