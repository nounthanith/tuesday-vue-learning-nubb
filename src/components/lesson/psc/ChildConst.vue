<template>
    <div class="w-sm m-auto p-5 bg-black rounded-sm flex flex-col">
        <!-- Text -->
        <p class="text-[hotpink] font-semibold text-xl">
            My Name is <b class="text-white underline">{{ sname }}</b> I'm <b class="text-white underline">{{ sage
                }}</b> years
        </p>
        <!-- input Data -->
        <input v-model="studentName" type="text" placeholder="Input Name" class="border-2 rounded-sm border-white p-2 text-white w-full mt-2">
        <input v-model="studentAge" type="text" placeholder="Input Age" class="border-2 rounded-sm border-white p-2 text-white w-full mt-2">
        <!-- Button -->
         <button @click="changeData"
            class="text-[hotpink] mt-2 border-2 border-[hotpink] p-2 rounded-sm hover:scale-105 active:scale-95 duration-300 transition-all">Change
            Data
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const studentName = ref("")
const studentAge = ref("")

const porpStudent = defineProps({
    sname: String,
    sage: Number,
})

const emit = defineEmits();
const changeData = () => {
    emit(
        'updateData',
        porpStudent.sname = studentName.value,
        porpStudent.sage = studentAge.value

    )
    studentName.value = ''
    studentAge.value = ''
};

</script>
<!-- ការបោះ Data ពី Components មួយទៅ Components មួយ -->