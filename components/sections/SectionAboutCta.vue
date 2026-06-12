<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"

  defineOptions({ name: "SectionAboutCta" })

  defineProps<{
    title: string
    lead: string
  }>()

  const contactTarget = { name: "slug", hash: "#kontakt" } as const
  const servicesTarget = {
    name: "slug",
    params: { slug: "leistungen" },
  } as const
</script>

<template>
  <section class="about-gradient px-6 py-20 text-white lg:px-12 lg:py-[84px]">
    <div class="mx-auto max-w-3xl text-center">
      <span
        class="mx-auto grid size-24 place-items-center rounded-full bg-white/20 p-7"
      >
        <AvIcon name="smile" />
      </span>
      <h2 class="mt-8 text-4xl font-bold leading-tight lg:text-5xl">
        {{ title }}
      </h2>
      <p class="mx-auto mt-7 max-w-2xl text-lg leading-7 text-white/90">
        {{ lead }}
      </p>

      <div class="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
        <NuxtLinkLocale
          :to="contactTarget"
          class="rounded-xl bg-brand-red px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-brand-red-dark"
        >
          Jetzt Kontakt aufnehmen
        </NuxtLinkLocale>
        <NuxtLinkLocale
          :to="servicesTarget"
          class="rounded-xl border border-white px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-white/10"
        >
          Unsere Leistungen entdecken
        </NuxtLinkLocale>
      </div>

      <span class="mx-auto mt-12 block h-px max-w-3xl bg-white/70" />

      <div class="mt-10 grid gap-8 text-left sm:grid-cols-2 sm:gap-20">
        <a href="tel:+41797041411" class="flex items-center gap-5">
          <span
            class="grid size-[52px] shrink-0 place-items-center rounded-full bg-white p-3.5 text-brand-red"
          >
            <AvIcon name="phone" />
          </span>
          <span>
            <strong class="block text-lg">Rufen Sie uns an</strong>
            <span class="mt-1 block font-bold">+41 79 704 14 11</span>
          </span>
        </a>
        <a href="mailto:info@avmeti.ch" class="flex items-center gap-5">
          <span
            class="grid size-[52px] shrink-0 place-items-center rounded-full bg-white p-3.5 text-brand-red"
          >
            <AvIcon name="mail" />
          </span>
          <span>
            <strong class="block text-lg">Schreiben Sie uns</strong>
            <span class="mt-1 block font-bold">info@avmeti.ch</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
