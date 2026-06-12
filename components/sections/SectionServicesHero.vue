<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionServicesHero" })

  defineProps<{
    pill: I18nString
    title: I18nString
    lead: I18nString
    ctaLabel: I18nString
    ctaUrl?: string
    phoneLabel: I18nString
    phoneUrl?: string
    trust: I18nString
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-20 text-center lg:px-12 lg:py-28">
    <div class="mx-auto max-w-4xl">
      <span
        class="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white"
      >
        {{ t(pill) }}
      </span>
      <h1
        class="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]"
      >
        {{ t(title) }}
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-7 text-white/75">
        {{ t(lead) }}
      </p>
      <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          :href="ctaUrl || '#kontakt'"
          class="rounded-xl bg-white px-8 py-4 text-[16px] font-bold text-brand-blue shadow-lg shadow-black/10 transition hover:bg-white/90"
        >
          {{ t(ctaLabel) }}
        </a>
        <a
          :href="phoneUrl || '#kontakt'"
          class="rounded-xl border border-white/40 px-8 py-4 text-[16px] font-bold text-white transition hover:bg-white/10"
        >
          {{ t(phoneLabel) }}
        </a>
      </div>
      <p class="mt-7 text-sm text-white/65">{{ t(trust) }}</p>
    </div>
  </section>
</template>
