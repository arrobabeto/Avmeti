<script setup lang="ts">
  import { ref } from "vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionFaq" })

  const p = defineProps<{
    eyebrow: I18nString
    title: I18nString
    lead: I18nString
    faqs: { question: I18nString; answer: I18nString }[]
    ctaText: I18nString
    ctaLabel: I18nString
    ctaUrl?: string
  }>()

  const t = useTranslate()
  const openIndex = ref<number | null>(0)

  function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
  }
</script>

<template>
  <section class="bg-white px-6 py-20 text-brand-ink lg:px-12">
    <div class="mx-auto max-w-4xl">
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

      <div class="mt-12 space-y-4">
        <div
          v-for="(f, i) of faqs"
          :key="i"
          class="overflow-hidden rounded-2xl border border-brand-red/35 bg-white"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            @click="toggle(i)"
          >
            <span class="font-bold capitalize text-brand-ink">
              {{ t(f.question) }}
            </span>
            <span
              class="grid size-7 shrink-0 place-items-center rounded-md bg-brand-red text-lg font-bold leading-none text-white"
            >
              {{ openIndex === i ? "−" : "+" }}
            </span>
          </button>
          <div
            v-if="openIndex === i"
            class="px-6 pb-6 text-sm leading-7 text-[#6b7280]"
          >
            {{ t(f.answer) }}
          </div>
        </div>
      </div>

      <div class="bg-soft mt-12 rounded-2xl px-6 py-10 text-center">
        <p class="font-semibold capitalize text-brand-ink">{{ t(ctaText) }}</p>
        <a
          :href="ctaUrl || '#kontakt'"
          class="mt-5 inline-block rounded-xl bg-brand-blue px-8 py-3.5 text-[16px] font-bold text-white transition hover:bg-brand-blue-dark"
        >
          {{ t(ctaLabel) }}
        </a>
      </div>
    </div>
  </section>
</template>
