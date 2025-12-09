<template>
    <div class="border-2 border-black text-black w-fit p-8 rounded-lg text-xl font-bold">
        <h1>Name: <span class="text-rose-500">{{ author.name }}</span></h1>
        <p>Gender: <span class="text-yellow-500">{{ author.books[0] }}</span></p>
        <p>POB: <span class="text-green-500">{{ author.books[1] }}</span></p>
        <p>Published: <span class="text-sky-500">{{ isPublished }}</span></p>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const author = reactive({
    name: "Nhok Theam",
    books: [
        "Kolab Pailin",
        "Phka Srapoun"
    ]
})

const isPublished = computed(() => {
    return author.books.length > 0 ? "Published" : "Not Published"
})

</script>