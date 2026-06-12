<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionLegalInfo" })

  defineProps<{
    rows?: { label: I18nString; values: string[] }[]
    contactTitle?: I18nString
    contacts?: { icon: string; label: I18nString; value: string }[]
  }>()

  const t = useTranslate()
</script>

<template>
  <section class="bg-white px-6 py-10 text-brand-ink lg:px-12">
    <div class="mx-auto max-w-4xl space-y-8">
      <div v-if="rows?.length" class="bg-soft rounded-2xl px-7 py-8 lg:px-10">
        <dl class="space-y-6">
          <div v-for="(r, i) of rows" :key="i">
            <dt class="font-bold text-brand-ink">{{ t(r.label) }}</dt>
            <dd
              v-for="(v, vi) of r.values"
              :key="vi"
              class="text-[15px] text-[#4b5563]"
            >
              {{ v }}
            </dd>
          </div>
        </dl>
      </div>

      <div
        v-if="contacts?.length"
        class="rounded-2xl border border-[#ececec] px-7 py-8 shadow-sm lg:px-10"
      >
        <h2 class="text-2xl font-bold text-brand-ink">
          {{ t(contactTitle!) }}
        </h2>
        <ul class="mt-6 space-y-5">
          <li
            v-for="(c, i) of contacts"
            :key="i"
            class="flex items-start gap-4"
          >
            <span class="mt-0.5 size-5 shrink-0 text-brand-red">
              <AvIcon :name="c.icon as any" />
            </span>
            <span class="text-[15px] leading-5">
              <span class="block font-bold text-brand-ink">
                {{ t(c.label) }}
              </span>
              <span class="block font-semibold text-[#4b5563]">
                {{ c.value }}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
