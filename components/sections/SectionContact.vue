<script setup lang="ts">
  import { reactive, ref } from "vue"
  import AvIcon from "~/components/common/AvIcon.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import type { I18nString } from "~/types/util/I18nString"

  defineOptions({ name: "SectionContact" })

  const p = defineProps<{
    pill: I18nString
    title: I18nString
    lead: I18nString
    infos: { icon: string; title: I18nString; lines: string[] }[]
    map: string
    formTitle?: I18nString
    submitLabel: I18nString
    disclaimer: I18nString
  }>()

  const t = useTranslate()

  const form = reactive({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const sent = ref(false)
  const sending = ref(false)

  async function submit() {
    sending.value = true
    try {
      await $fetch("/api/contacts", {
        method: "POST",
        body: { ...form },
      }).catch(() => null)
      sent.value = true
    } finally {
      sending.value = false
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-brand-red/40 bg-white px-4 py-3 text-[15px] text-brand-ink outline-none transition focus:border-brand-red"
</script>

<template>
  <section id="kontakt" class="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-20">
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
        <p class="mx-auto mt-4 max-w-xl text-base text-white/70">
          {{ t(lead) }}
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <div class="space-y-4">
          <div
            v-for="(info, i) of infos"
            :key="i"
            class="flex gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm"
          >
            <span
              class="bg-white/12 grid size-11 shrink-0 place-items-center rounded-xl p-2.5 text-white"
            >
              <AvIcon :name="info.icon as any" />
            </span>
            <div class="text-sm leading-6">
              <h3 class="font-bold text-white">{{ t(info.title) }}</h3>
              <p
                v-for="(line, li) of info.lines"
                :key="li"
                :class="
                  li === info.lines.length - 1
                    ? 'font-semibold text-white'
                    : 'text-white/65'
                "
              >
                {{ line }}
              </p>
            </div>
          </div>
          <NuxtImg
            :src="map"
            alt="Standort Karte"
            class="aspect-[2/1] w-full rounded-2xl object-cover"
          />
        </div>

        <div
          class="rounded-[1.75rem] bg-white p-7 shadow-2xl shadow-black/20 lg:p-9"
        >
          <form v-if="!sent" class="space-y-4" @submit.prevent="submit">
            <label class="block">
              <span class="text-sm font-semibold text-brand-ink">
                Ihr Name *
              </span>
              <input v-model="form.name" required :class="fieldClass" />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-brand-ink">
                Firmenname
              </span>
              <input v-model="form.company" :class="fieldClass" />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-brand-ink">
                E-Mail-Adresse *
              </span>
              <input
                v-model="form.email"
                type="email"
                required
                :class="fieldClass"
              />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-brand-ink">
                Telefonnummer *
              </span>
              <input
                v-model="form.phone"
                type="tel"
                required
                :class="fieldClass"
              />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-brand-ink">
                Gewünschter Service *
              </span>
              <input v-model="form.service" required :class="fieldClass" />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-brand-ink">
                Ihre Nachricht
              </span>
              <textarea v-model="form.message" rows="4" :class="fieldClass" />
            </label>
            <button
              type="submit"
              :disabled="sending"
              class="mx-auto mt-2 block w-auto rounded-xl bg-brand-blue px-8 py-3.5 text-center text-[16px] font-bold text-white transition hover:bg-brand-blue-dark disabled:opacity-60"
            >
              {{ t(submitLabel) }}
            </button>
            <p class="text-center text-xs leading-5 text-[#6b7280]">
              {{ t(disclaimer) }}
            </p>
          </form>

          <div v-else class="py-16 text-center">
            <span
              class="mx-auto grid size-14 place-items-center rounded-full bg-brand-blue/10 p-3.5 text-brand-blue"
            >
              <AvIcon name="check" />
            </span>
            <p class="mt-4 text-lg font-bold text-brand-ink">Vielen Dank!</p>
            <p class="mt-1 text-sm text-[#6b7280]">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
