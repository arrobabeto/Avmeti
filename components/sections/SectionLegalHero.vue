<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionLegalHero" })

  defineProps<{
    title: I18nString
    meta?: { text: I18nString; tone?: "red" | "blue" }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="bg-white px-6 pb-6 pt-16 text-brand-ink lg:px-12 lg:pt-20">
    <div class="mx-auto flex max-w-4xl flex-col">
      <h1 class="text-4xl font-bold text-brand-blue lg:text-[44px]">
        {{ t(title) }}
      </h1>
      <span
        class="mt-4 w-16 shrink-0 rounded-full bg-brand-red"
        style="height: 4px"
      />
      <div v-if="meta?.length" class="mt-6 space-y-1">
        <p
          v-for="(m, i) of meta"
          :key="i"
          class="text-sm font-medium"
          :class="m.tone === 'blue' ? 'text-brand-blue' : 'text-brand-red'"
        >
          {{ t(m.text) }}
        </p>
      </div>
    </div>
  </section>
</template>
