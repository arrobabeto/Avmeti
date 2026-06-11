<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionQuality" })

  const p = defineProps<{
    pill: I18nString
    title: I18nString
    lead: I18nString
    badges: { icon: string; title: I18nString; text: I18nString }[]
    trustSignal: {
      pill: I18nString
      title: I18nString
      text: I18nString
      caption: I18nString
      images: string[]
    }
    guarantees: {
      title: I18nString
      lead: I18nString
      items: { icon: string; title: I18nString; text: I18nString }[]
    }
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="px-6 py-16 lg:px-12 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="text-center">
        <span
          class="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white"
        >
          {{ t(pill) }}
        </span>
        <h2 class="mt-5 text-3xl font-bold text-white lg:text-[40px]">
          {{ t(title) }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-white/70">
          {{ t(lead) }}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        <div
          v-for="(b, i) of badges"
          :key="i"
          class="flex flex-col items-center rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-8 text-center backdrop-blur-sm"
        >
          <span
            class="mb-4 grid size-14 place-items-center rounded-full bg-white/15 p-3.5 text-white"
          >
            <AvIcon :name="b.icon as any" />
          </span>
          <h3 class="font-bold text-white">{{ t(b.title) }}</h3>
          <p class="mt-1 text-sm leading-5 text-white/65">{{ t(b.text) }}</p>
        </div>
      </div>

      <div
        class="mt-10 rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-8 text-center backdrop-blur-sm lg:p-12"
      >
        <span
          class="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white"
        >
          {{ t(trustSignal.pill) }}
        </span>
        <h3 class="mt-5 text-2xl font-bold text-white">
          {{ t(trustSignal.title) }}
        </h3>
        <p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
          {{ t(trustSignal.text) }}
        </p>
        <div class="mt-8 grid gap-6 sm:grid-cols-2">
          <div
            v-for="(img, i) of trustSignal.images"
            :key="i"
            class="relative overflow-hidden rounded-2xl"
          >
            <NuxtImg
              :src="img"
              alt=""
              class="aspect-[2/1] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        class="mt-10 rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm lg:p-12"
      >
        <div class="text-center">
          <h3 class="text-2xl font-bold text-white">
            {{ t(guarantees.title) }}
          </h3>
          <p class="mt-2 text-sm text-white/70">{{ t(guarantees.lead) }}</p>
        </div>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <div
            v-for="(g, i) of guarantees.items"
            :key="i"
            class="border-white/12 flex gap-4 rounded-2xl border bg-white/[0.05] p-5"
          >
            <span
              class="bg-white/12 grid size-10 shrink-0 place-items-center rounded-xl p-2.5 text-white"
            >
              <AvIcon :name="g.icon as any" />
            </span>
            <div>
              <h4 class="font-bold text-white">{{ t(g.title) }}</h4>
              <p class="mt-1 text-xs leading-5 text-white/65">
                {{ t(g.text) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
