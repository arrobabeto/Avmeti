<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionLegalBanner" })

  defineProps<{
    title: I18nString
    subtitle?: I18nString
    lines?: { text: I18nString; href?: string }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="bg-white px-6 py-10 text-brand-ink lg:px-12">
    <div class="mx-auto max-w-4xl">
      <div class="bg-stats-grad rounded-2xl px-8 py-8 text-white lg:px-10">
        <p class="text-lg font-bold">{{ t(title) }}</p>
        <p v-if="subtitle" class="mt-1 font-semibold">{{ t(subtitle) }}</p>
        <p v-for="(l, i) of lines" :key="i" class="mt-1 font-semibold">
          <a
            v-if="l.href"
            :href="l.href"
            class="underline underline-offset-2 hover:text-white/80"
          >
            {{ t(l.text) }}
          </a>
          <span v-else>{{ t(l.text) }}</span>
        </p>
      </div>
    </div>
  </section>
</template>
