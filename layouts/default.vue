<script setup lang="ts">
  import Navigation from "~/layouts/components/Navigation.vue"
  import Footer from "~/layouts/components/Footer.vue"
</script>

<template>
  <div class="flex min-h-[100dvh] flex-col bg-white text-[#010101]">
    <Navigation />
    <main class="brand-gradient flex-grow text-white">
      <slot />
    </main>
    <Footer />
  </div>
</template>
