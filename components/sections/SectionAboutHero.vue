<script setup lang="ts">
  defineOptions({ name: "SectionAboutHero" })

  defineProps<{
    title: string
    lead: string
  }>()
</script>

<template>
  <section
    class="about-gradient flex min-h-[600px] items-center justify-center px-6 py-24 text-center text-white lg:min-h-[602px]"
  >
    <div class="max-w-5xl">
      <h1 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-[60px]">
        {{ title }}
      </h1>
      <span class="mx-auto mt-8 block h-1.5 w-36 bg-brand-red" />
      <p class="mt-9 text-lg leading-7 text-white/90 lg:text-xl">
        {{ lead }}
      </p>
    </div>
  </section>
</template>
