<template>
  <Child>
    <template v-slot:nav>
      Navbar
    </template>
    <template v-slot:main="{st}">
      <div v-for="s in st" class="border-b p-3">
        <div class="flex">No.<span>{{ s.no }}</span>Name: <h2>{{ s.name }} Age: <span>{{ s.age }}</span></h2></div>
        <p>Major: {{ s.major }}</p>

      </div>

    </template>
    <template v-slot:footer>
      footer
    </template>
  </Child>
</template>

<script setup>
import Child from "./Child.vue";

</script>