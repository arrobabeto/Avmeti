<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionTestimonials" })

  const p = defineProps<{
    pill: I18nString
    title: I18nString
    lead: I18nString
    testimonials: {
      quote: I18nString
      name: string
      role: I18nString
      icon: string
    }[]
    badge: { title: I18nString; subtitle: I18nString }
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
        <p class="mt-3 text-base text-white/70">{{ t(lead) }}</p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(c, i) of testimonials"
          :key="i"
          class="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm"
        >
          <div class="text-lg tracking-wide text-white">★★★★★</div>
          <p class="mt-3 text-sm italic leading-6 text-white/80">
            "{{ t(c.quote) }}"
          </p>
          <div class="mt-5 flex items-center gap-3">
            <span
              class="bg-white/12 grid size-10 shrink-0 place-items-center rounded-full p-2.5 text-white"
            >
              <AvIcon :name="c.icon as any" />
            </span>
            <span>
              <span class="block text-sm font-bold text-white">
                {{ c.name }}
              </span>
              <span class="block text-xs text-white/60">{{ t(c.role) }}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="mt-12 flex justify-center">
        <div
          class="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 backdrop-blur-sm"
        >
          <span
            class="bg-white/12 grid size-9 shrink-0 place-items-center rounded-full p-2 text-white"
          >
            <AvIcon name="check" />
          </span>
          <span>
            <span class="block text-sm font-bold text-white">
              {{ t(badge.title) }}
            </span>
            <span class="block text-xs text-white/65">
              {{ t(badge.subtitle) }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
