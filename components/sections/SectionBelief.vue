<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionBelief" })

  const p = defineProps<{
    pill: I18nString
    title: I18nString
    lead: I18nString
    values: { icon: string; title: I18nString; text: I18nString }[]
    quote: { text: I18nString; author: I18nString }
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-16 lg:px-12 lg:py-20">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
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
        <p class="mx-auto mt-5 max-w-2xl text-base text-white/70">
          {{ t(lead) }}
        </p>
      </div>

      <div class="mt-12 grid gap-10 md:grid-cols-3">
        <div
          v-for="(v, i) of values"
          :key="i"
          class="flex flex-col items-center text-center"
        >
          <span
            class="bg-white/12 mb-4 grid size-12 place-items-center rounded-xl p-3 text-white"
          >
            <AvIcon :name="v.icon as any" />
          </span>
          <h3 class="text-lg font-bold text-white">{{ t(v.title) }}</h3>
          <p class="mt-2 max-w-xs text-sm leading-6 text-white/65">
            {{ t(v.text) }}
          </p>
        </div>
      </div>

      <div
        class="mt-12 rounded-[1.75rem] border border-white/15 bg-white/[0.06] px-6 py-12 text-center backdrop-blur-sm"
      >
        <span class="mx-auto block size-7 text-white/80">
          <AvIcon name="quote" />
        </span>
        <p
          class="mx-auto mt-5 max-w-2xl text-xl font-bold leading-8 text-white"
        >
          {{ t(quote.text) }}
        </p>
        <span class="mx-auto mt-6 block h-px w-16 bg-white/30" />
        <p class="mt-5 text-sm text-white/70">{{ t(quote.author) }}</p>
      </div>
    </div>
  </section>
</template>
