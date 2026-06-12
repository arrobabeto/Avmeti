<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionServicesGrid" })

  defineProps<{
    eyebrow: I18nString
    title: I18nString
    lead: I18nString
    linkLabel: I18nString
    services: {
      icon: string
      title: I18nString
      text: I18nString
      features: I18nString[]
    }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="bg-white px-6 py-20 text-brand-ink lg:px-12">
    <div class="mx-auto max-w-7xl">
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

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(s, i) of services"
          :key="i"
          class="flex flex-col rounded-2xl border border-[#ececec] bg-white p-7 shadow-sm transition hover:shadow-md"
        >
          <span
            class="bg-icon-grad grid size-14 place-items-center rounded-2xl p-3.5 text-white"
          >
            <AvIcon :name="s.icon as any" />
          </span>
          <h3 class="mt-5 text-xl font-bold text-brand-ink">
            {{ t(s.title) }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-[#6b7280]">{{ t(s.text) }}</p>
          <ul class="mt-5 space-y-2">
            <li
              v-for="(f, fi) of s.features"
              :key="fi"
              class="flex items-center gap-2 text-sm text-[#374862]"
            >
              <span class="size-4 shrink-0 text-brand-red">
                <AvIcon name="check" />
              </span>
              {{ t(f) }}
            </li>
          </ul>
          <a
            :href="'#kontakt'"
            class="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-red transition hover:gap-2"
          >
            {{ t(linkLabel) }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
