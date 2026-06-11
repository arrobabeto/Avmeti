<script setup lang="ts">
  import { ref } from "vue"
  import { useRoute } from "#app"
  import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()
  const route = useRoute()
  const open = ref(false)

  const links = [
    { name: { en: "Leistungen", de: "Leistungen" }, url: "/leistungen" },
    { name: { en: "Über uns", de: "Über uns" }, url: "/uber-uns" },
  ]
</script>

<template>
  <nav
    class="sticky top-0 z-30 border-b border-[#ececec] bg-white/95 backdrop-blur"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-12"
    >
      <NuxtLinkLocale to="/" class="shrink-0">
        <NuxtImg
          src="/img/logo.png"
          alt="AVMETI Facility Services GmbH"
          class="h-9 w-auto sm:h-10"
        />
      </NuxtLinkLocale>

      <div class="hidden items-center gap-9 md:flex">
        <NuxtLinkLocale
          v-for="l of links"
          :key="l.url"
          :to="l.url"
          class="text-[17px] font-medium text-[#374862] transition hover:text-brand-blue"
          :class="route.path === l.url ? 'text-brand-blue' : ''"
        >
          {{ t(l.name) }}
        </NuxtLinkLocale>

        <NuxtLinkLocale
          to="/#kontakt"
          class="rounded-xl bg-brand-blue px-7 py-3 text-[16px] font-bold text-white transition hover:bg-brand-blue-dark"
        >
          Termin vereinbaren
        </NuxtLinkLocale>
      </div>

      <button
        class="inline-flex size-10 items-center justify-center rounded-lg text-brand-ink md:hidden"
        aria-label="Menu"
        @click="open = !open"
      >
        <span class="text-2xl leading-none">{{ open ? "✕" : "☰" }}</span>
      </button>
    </div>

    <div
      v-if="open"
      class="border-t border-[#ececec] bg-white px-6 py-4 md:hidden"
    >
      <div class="flex flex-col gap-3">
        <NuxtLinkLocale
          v-for="l of links"
          :key="l.url"
          :to="l.url"
          class="text-[17px] font-medium text-[#374862]"
          @click="open = false"
        >
          {{ t(l.name) }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          to="/#kontakt"
          class="mt-1 rounded-xl bg-brand-blue px-6 py-3 text-center text-[16px] font-bold text-white"
          @click="open = false"
        >
          Termin vereinbaren
        </NuxtLinkLocale>
      </div>
    </div>
  </nav>
</template>
