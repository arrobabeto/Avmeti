<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import SafeHtml from "~/components/common/SafeHtml.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionProblem" })

  const p = defineProps<{
    pill: I18nString
    title: I18nString
    intro: I18nString
    highlight: I18nString
    image: string
    services: { icon: string; title: I18nString; text: I18nString }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-16 lg:px-12 lg:py-20">
    <div class="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
      <NuxtImg
        :src="image"
        alt=""
        class="aspect-[3/4] w-full max-w-md rounded-[1.75rem] object-cover shadow-2xl shadow-black/30 lg:sticky lg:top-28"
      />

      <div>
        <span
          class="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white"
        >
          {{ t(pill) }}
        </span>
        <h2
          class="mt-5 text-3xl font-bold leading-tight text-white lg:text-[40px]"
        >
          {{ t(title) }}
        </h2>
        <div
          class="mt-5 text-[15px] leading-7 text-white/70 [&_strong]:text-white"
        >
          <SafeHtml :html="t(intro)" />
        </div>
        <p class="mt-4 font-bold text-white">{{ t(highlight) }}</p>

        <div class="mt-8 space-y-4">
          <div
            v-for="(s, i) of services"
            :key="i"
            class="flex gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm"
          >
            <span
              class="bg-white/12 grid size-11 shrink-0 place-items-center rounded-xl p-2.5 text-white"
            >
              <AvIcon :name="s.icon as any" />
            </span>
            <div>
              <h3 class="text-lg font-bold text-white">{{ t(s.title) }}</h3>
              <p class="mt-1 text-sm leading-6 text-white/70">
                {{ t(s.text) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
