<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionWhy" })

  const p = defineProps<{
    title: I18nString
    lead: I18nString
    cards: { icon: string; title: I18nString; text: I18nString }[]
    guarantee: {
      pill: I18nString
      title: I18nString
      text: I18nString
      items: { icon: string; title: I18nString; text: I18nString }[]
    }
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
          v-for="(c, i) of cards"
          :key="i"
          class="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm"
        >
          <span
            class="bg-white/12 grid size-11 place-items-center rounded-xl p-2.5 text-white"
          >
            <AvIcon :name="c.icon as any" />
          </span>
          <h3 class="mt-5 text-lg font-bold text-white">{{ t(c.title) }}</h3>
          <p class="mt-2 text-sm leading-6 text-white/70">{{ t(c.text) }}</p>
        </div>
      </div>

      <div
        class="mt-10 grid gap-8 rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm lg:grid-cols-2 lg:p-12"
      >
        <div>
          <span
            class="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white"
          >
            {{ t(guarantee.pill) }}
          </span>
          <h3 class="mt-5 text-2xl font-bold text-white lg:text-3xl">
            {{ t(guarantee.title) }}
          </h3>
          <p class="mt-4 max-w-md text-sm leading-6 text-white/70">
            {{ t(guarantee.text) }}
          </p>
        </div>
        <div class="space-y-4">
          <div
            v-for="(g, i) of guarantee.items"
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
              <p class="mt-1 text-sm leading-6 text-white/70">
                {{ t(g.text) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
