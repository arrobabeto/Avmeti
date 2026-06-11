<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionHero" })

  const p = defineProps<{
    title: I18nString
    lead: I18nString
    ctaLabel: I18nString
    ctaUrl?: string
    trust: I18nString
    image: string
    badgeValue?: string
    badgeLabel?: I18nString
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-16 lg:px-12 lg:py-24">
    <div
      class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]"
    >
      <div>
        <h1
          class="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[60px]"
        >
          {{ t(title) }}
        </h1>
        <p class="mt-7 max-w-xl text-lg leading-7 text-white/75">
          {{ t(lead) }}
        </p>
        <div class="mt-9">
          <a
            :href="ctaUrl || '#kontakt'"
            class="inline-block rounded-xl bg-white px-8 py-4 text-center text-[17px] font-bold text-brand-blue shadow-lg shadow-black/10 transition hover:bg-white/90"
          >
            {{ t(ctaLabel) }}
          </a>
        </div>
        <div class="mt-5 flex items-center gap-2 text-sm text-white/70">
          <span class="size-4 text-white">
            <AvIcon name="check" />
          </span>
          {{ t(trust) }}
        </div>
      </div>

      <div class="relative">
        <NuxtImg
          :src="image"
          alt=""
          class="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/30"
        />
        <div
          v-if="badgeValue"
          class="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-brand-red/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-6"
        >
          <span
            class="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 p-2.5 text-white"
          >
            <AvIcon name="medal" />
          </span>
          <span class="text-white">
            <span class="block text-2xl font-bold leading-none">
              {{ badgeValue }}
            </span>
            <span class="text-sm text-white/80">{{ t(badgeLabel!) }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
