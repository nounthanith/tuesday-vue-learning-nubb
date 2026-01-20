<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-black text-white p-4 border-b flex justify-between items-center">
      <h1 class="text-xl font-bold">My Vue + Tailwind App</h1>
<!--      <RouterLink to="/">Login</RouterLink>-->
    </header>

    <!-- Main content with sidebar -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-black text-white border-r p-4">
        <nav class="">
          <ul class="">
            <li class="mb-2 flex flex-col">
              <RouterLink to="/home" active-class="bg-white text-black p-2 rounded-sm" class="p-2">Home</RouterLink>
              <RouterLink :to="{ name: 'Students', params: { id: 2 } }"
                          active-class="bg-white text-black p-2 rounded-sm" class="p-2">Student
              </RouterLink>

            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main -->
      <main class="flex-1 p-6 bg-black/90 text-white">
        <RouterView/>
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      &copy; 2025 My Vue App. All rights reserved.
    </footer>
  </div>
</template>

<script setup>

</script>

