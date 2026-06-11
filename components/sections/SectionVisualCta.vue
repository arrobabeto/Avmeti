<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionVisualCta" })

  const p = defineProps<{
    image: string
    pill: I18nString
    title: I18nString
    lead: I18nString
    features: { icon: string; label: I18nString }[]
    ctaLabel: I18nString
    ctaUrl?: string
    trust: I18nString
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="relative overflow-hidden px-6 py-16 lg:px-12 lg:py-24">
    <NuxtImg
      :src="image"
      alt=""
      class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-brand-blue-dark/70"
    />

    <div
      class="mx-auto max-w-4xl rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-8 text-center backdrop-blur-md lg:p-14"
    >
      <span
        class="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white"
      >
        {{ t(pill) }}
      </span>
      <h2
        class="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-white lg:text-[40px]"
      >
        {{ t(title) }}
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-base text-white/75">{{ t(lead) }}</p>

      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
        <div
          v-for="(f, i) of features"
          :key="i"
          class="flex flex-col items-center"
        >
          <span
            class="mb-3 grid size-14 place-items-center rounded-full bg-white/15 p-3.5 text-white"
          >
            <AvIcon :name="f.icon as any" />
          </span>
          <span class="text-sm font-semibold text-white">{{ t(f.label) }}</span>
        </div>
      </div>

      <div class="mt-10">
        <a
          :href="ctaUrl || '#kontakt'"
          class="inline-block rounded-xl bg-white px-8 py-4 text-[16px] font-bold text-brand-blue shadow-lg shadow-black/20 transition hover:bg-white/90"
        >
          {{ t(ctaLabel) }}
        </a>
      </div>
      <span class="mx-auto mt-8 block h-px w-full max-w-md bg-white/25" />
      <p class="mt-5 text-sm text-white/70">{{ t(trust) }}</p>
    </div>
  </section>
</template>
