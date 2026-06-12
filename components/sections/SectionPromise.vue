<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionPromise" })

  defineProps<{
    eyebrow: I18nString
    title: I18nString
    lead: I18nString
    cards: { icon: string; title: I18nString; text: I18nString }[]
    stats: { value: string; label: I18nString }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="bg-white px-6 py-20 text-brand-ink lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="text-center">
        <p class="text-sm font-bold uppercase tracking-wide text-brand-red">
          {{ t(eyebrow) }}
        </p>
        <h2 class="mt-3 text-3xl font-bold text-brand-ink lg:text-[40px]">
          {{ t(title) }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6b7280]">
          {{ t(lead) }}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div
          v-for="(c, i) of cards"
          :key="i"
          class="bg-soft flex flex-col items-center rounded-2xl px-5 py-9 text-center"
        >
          <span
            class="bg-icon-grad mb-5 grid size-16 place-items-center rounded-full p-4 text-white"
          >
            <AvIcon :name="c.icon as any" />
          </span>
          <h3 class="text-lg font-bold text-brand-ink">{{ t(c.title) }}</h3>
          <p class="mt-2 text-sm leading-5 text-[#6b7280]">{{ t(c.text) }}</p>
        </div>
      </div>

      <div
        class="bg-stats-grad mt-8 grid grid-cols-2 gap-6 rounded-[1.75rem] px-6 py-12 text-center text-white lg:grid-cols-4"
      >
        <div v-for="(s, i) of stats" :key="i">
          <p class="text-4xl font-bold lg:text-5xl">{{ s.value }}</p>
          <p class="mt-2 text-sm text-white/80">{{ t(s.label) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
