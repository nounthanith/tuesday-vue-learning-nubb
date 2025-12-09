<template>
    <div class="">
        <input type="text" v-model="name" :disabled="isDisabled" placeholder="text"
            class="border-2 border-black rounded-sm p-2">
        
        <p>{{ name }}</p>

        <button @click="isDisabled = !isDisabled" class="bg-black text-white p-2 rounded-sm">
            {{ isDisabled ? 'Disabled' : 'Enabled' }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isDisabled = ref(false)
const name = ref('')
</script>
