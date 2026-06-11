<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionStats" })

  const p = defineProps<{
    stats: { value: string; label: I18nString; icon: string }[]
    trustEyebrow: I18nString
    trustTitle: I18nString
    logos: { name: string; label: I18nString }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-12 lg:px-12 lg:py-16">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-5 lg:grid-cols-4">
        <div
          v-for="(s, i) of stats"
          :key="i"
          class="flex flex-col items-center rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-8 text-center backdrop-blur-sm"
        >
          <span
            class="mb-4 grid size-14 place-items-center rounded-full bg-white/15 p-3.5 text-white"
          >
            <AvIcon :name="s.icon as any" />
          </span>
          <span class="text-3xl font-bold text-white">{{ s.value }}</span>
          <span class="mt-1 text-sm text-white/70">{{ t(s.label) }}</span>
        </div>
      </div>

      <div class="mt-14 text-center">
        <p class="text-sm text-white/60">{{ t(trustEyebrow) }}</p>
        <h2 class="mt-1 text-3xl font-bold text-white">{{ t(trustTitle) }}</h2>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
        <div
          v-for="(l, i) of logos"
          :key="i"
          class="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-9 text-center backdrop-blur-sm"
        >
          <span class="text-xl font-bold text-white">{{ l.name }}</span>
          <span class="mt-1 text-sm text-white/65">{{ t(l.label) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
