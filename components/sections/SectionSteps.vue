<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionSteps" })

  const p = defineProps<{
    title: I18nString
    lead: I18nString
    steps: {
      number: string
      title: I18nString
      text: I18nString
      footnote: I18nString
      icon: string
    }[]
    ctaLabel: I18nString
    ctaUrl?: string
    trust: I18nString
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-16 lg:px-12 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white lg:text-[40px]"
        >
          {{ t(title) }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base text-white/70">
          {{ t(lead) }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div
          v-for="(s, i) of steps"
          :key="i"
          class="relative rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm"
        >
          <span class="absolute right-5 top-5 size-5 text-white/70">
            <AvIcon name="check" />
          </span>
          <span
            class="grid size-16 place-items-center rounded-2xl bg-white/[0.16] text-3xl font-bold text-white"
          >
            {{ s.number }}
          </span>
          <h3 class="mt-6 text-xl font-bold text-white">{{ t(s.title) }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/70">{{ t(s.text) }}</p>
          <div class="mt-6 flex items-center gap-2 text-sm text-white/80">
            <span class="size-4 shrink-0">
              <AvIcon :name="s.icon as any" />
            </span>
            {{ t(s.footnote) }}
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center">
        <a
          :href="ctaUrl || '#kontakt'"
          class="rounded-xl bg-white px-8 py-4 text-center text-[16px] font-bold text-brand-blue shadow-lg shadow-black/10 transition hover:bg-white/90"
        >
          {{ t(ctaLabel) }}
        </a>
        <p class="mt-4 text-sm font-semibold text-white/80">{{ t(trust) }}</p>
      </div>
    </div>
  </section>
</template>
