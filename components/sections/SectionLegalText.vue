<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionLegalText" })

  defineProps<{
    blocks: { heading: I18nString; text: I18nString }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="bg-white px-6 py-10 text-brand-ink lg:px-12">
    <div class="mx-auto max-w-4xl space-y-8">
      <div v-for="(b, i) of blocks" :key="i">
        <h2 class="text-lg font-bold text-brand-ink">{{ t(b.heading) }}</h2>
        <p class="mt-2 text-[15px] leading-7 text-[#4b5563]">{{ t(b.text) }}</p>
      </div>
    </div>
  </section>
</template>
