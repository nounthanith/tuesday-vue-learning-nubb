<template>
  <div class="min-h-[70vh] flex items-center justify-center ">
    <div class="w-full max-w-sm bg-black p-6 rounded-lg shadow">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />

      <button
        @click="login"
        class="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  </div>
</template>


