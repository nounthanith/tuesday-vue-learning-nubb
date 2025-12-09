<template>
    <div class="max-w-lg mx-auto mt-10">
        <h1 class="text-2xl mb-4">Dynamic List With Transitions</h1>
        <button @click="addItem" class="bg-blue-500 text-white py-2 px-4 rounded mb-4">Add Item</button>
        <button @click="removeItem" class="bg-red-500 text-white py-2 px-4 rounded mb-4 ml-2">Remove Item</button>
        <TransitionGroup name="fade" tag="ul" class="space-y-2">
            <li v-for="item in items" :key="item.id" class="bg-gray-200 p-4 rounded shadow-lg">
                {{ item.text }}
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
]);
const addItem = () => {
    const newItem = {
        id: items.value.length + 1, text: `Item ${items.value.length + 1}`
    };
    items.value.push(newItem);
};
const removeItem = () => {
    items.value.pop();
};
</script>

<style>
/* Fade transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Slide transitions for reordering 
*/
.fade-enter-active,
.fade-leave-active {
    transition: transform 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    transform: translateX(30px);
    /* Slide items to the right */
}
</style>