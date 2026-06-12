<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"

  const nav = [
    { label: "Home", to: { name: "slug" } },
    {
      label: "Leistungen",
      to: { name: "slug", params: { slug: "leistungen" } },
    },
    { label: "Über uns", to: { name: "uber-uns" } },
    { label: "Termin vereinbaren", to: { name: "slug", hash: "#kontakt" } },
  ] as const
  const legal = [
    {
      label: "Impressum",
      to: { name: "slug", params: { slug: "impressum" } },
    },
    {
      label: "Datenschutz",
      to: { name: "slug", params: { slug: "datenschutz" } },
    },
    { label: "AGB", to: { name: "slug", params: { slug: "agb" } } },
  ] as const
  const contact = [
    { icon: "phone", top: "Rufen Sie uns an", strong: "+41 79 704 14 11" },
    { icon: "mail", top: "Schreiben Sie uns", strong: "info@avmeti.ch" },
    {
      icon: "mapPin",
      top: "Besuchen Sie uns",
      strong: "Gysulastrasse 72, 5022 Rombach",
    },
  ] as const
</script>

<template>
  <footer class="bg-white px-6 pb-[54px] pt-11 text-[#374862]">
    <div class="mx-auto max-w-[1266px]">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <NuxtImg
            src="/img/logo.png"
            alt="AVMETI Facility Services GmbH"
            class="h-[60px] w-auto"
          />
          <p class="mt-5 max-w-xs text-sm leading-6 text-[#6b7280]">
            Über 23 Jahre Berufserfahrung in Reinigung & Facility Services für
            Schweizer KMU.
          </p>
          <p class="mt-5 text-lg font-bold text-brand-red">
            Einfach guter Service.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-brand-ink">Navigation</h3>
          <ul class="mt-5 space-y-3">
            <li v-for="l of nav" :key="l.label">
              <NuxtLinkLocale
                :to="l.to"
                class="text-[15px] text-[#6b7280] transition hover:text-brand-blue"
              >
                {{ l.label }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-brand-ink">Rechtliches</h3>
          <ul class="mt-5 space-y-3">
            <li v-for="l of legal" :key="l.label">
              <NuxtLinkLocale
                :to="l.to"
                class="text-[15px] text-[#6b7280] transition hover:text-brand-blue"
              >
                {{ l.label }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-brand-ink">Kontakt</h3>
          <ul class="mt-5 space-y-4">
            <li v-for="c of contact" :key="c.strong" class="flex gap-3">
              <span class="mt-0.5 size-5 shrink-0 text-brand-red">
                <AvIcon :name="c.icon" />
              </span>
              <span class="text-sm leading-5">
                <span class="block text-[#9ca3af]">{{ c.top }}</span>
                <span class="font-semibold text-brand-ink">{{ c.strong }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-[65px] border-[#ececec]" />

      <p class="mt-[65px] text-center text-sm leading-6 text-[#6b7280]">
        © 2026 AVMETI Facility Services. Alle Rechte vorbehalten | Made with ❤️
        in 🇨🇭 by Bexolutions Marketing und Vertrieb AG, Wo Meine Marke zur
        Nummer 1 wird – Digital Marketing, Business Development, Websites,
        Social Media & Videos.
      </p>
    </div>
  </footer>
</template>
