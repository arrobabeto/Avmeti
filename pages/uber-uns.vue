<script setup lang="ts">
  import { useHead, useRuntimeConfig, useSeoMeta } from "#imports"
  import SectionAboutCta from "~/components/sections/SectionAboutCta.vue"
  import SectionAboutHero from "~/components/sections/SectionAboutHero.vue"
  import SectionAboutTimeline from "~/components/sections/SectionAboutTimeline.vue"
  import SectionAboutValues from "~/components/sections/SectionAboutValues.vue"
  import { useCanonicalLinks } from "~/composables/useCanonicalLinks"

  const config = useRuntimeConfig()
  const canonicalPath = "/uber-uns"
  const canonicalUrl = `${config.public.siteUrl}${canonicalPath}`
  const title = "Über uns"
  const description =
    "Von der Familientradition zur modernen GmbH: Lernen Sie AVMETI Facility Services und unsere über 20-jährige Geschichte kennen."

  const timeline = [
    {
      year: "2002",
      title: "Die Anfänge",
      text: "Die Wurzeln unseres Unternehmens entstehen. Wir beginnen mit der Reinigung und Hauswartung von Immobilien. Von Anfang an stehen Zuverlässigkeit, Sorgfalt und eine enge Kundenbetreuung im Mittelpunkt unserer Arbeit.",
      side: "left",
      tone: "blue",
    },
    {
      year: "2016–2019",
      title: "Die Ausbildung",
      text: "Ein wichtiger Meilenstein: Berat Avmeti absolviert erfolgreich die Lehre als Gebäudereiniger EFZ. Mit seinem Fachwissen und frischem Engagement bereichert er das Familienunternehmen und legt den Grundstein für die nächste Generation.",
      side: "right",
      tone: "white",
    },
    {
      year: "2022",
      title: "Die Selbstständigkeit",
      text: "Berat Avmeti wagt den Schritt in die Selbstständigkeit und gründet eine Kollektivgesellschaft, um seine eigenen Visionen und Qualitätsansprüche einzubringen.",
      side: "left",
      tone: "red",
    },
    {
      year: "2024",
      title: "Die Zusammenführung",
      text: "Vater und Sohn entscheiden, ihre Kräfte zu bündeln und gemeinsam eine Einzelunternehmung zu führen. Diese Zusammenarbeit vereint langjährige Erfahrung mit moderner Fachkompetenz und führt das Unternehmen in eine zukunftsorientierte Richtung.",
      side: "right",
      tone: "white",
    },
    {
      year: "2025",
      title: "Die GmbH – Eine neue Ära",
      text: "Der nächste grosse Schritt: Die Einzelunternehmung wird erfolgreich in eine GmbH umgewandelt. Dieser Schritt markiert den Beginn einer neuen Phase, in der das Unternehmen bestens aufgestellt ist, um weiterhin hochwertige Reinigungs- und Hauswartungsdienstleistungen zu bieten – zuverlässig, professionell und familiär geprägt.",
      side: "left",
      tone: "gradient",
    },
  ] as const

  const values = [
    {
      icon: "handshake",
      title: "Zuverlässigkeit",
      text: "Seit über zwei Jahrzehnten stehen wir für pünktliche und verlässliche Dienstleistungen.",
    },
    {
      icon: "medal",
      title: "Fachkompetenz",
      text: "Mit EFZ-Ausbildung und langjähriger Praxiserfahrung garantieren wir höchste Qualität.",
    },
    {
      icon: "heart",
      title: "Familiäre Nähe",
      text: "Als Familienunternehmen pflegen wir persönliche und langfristige Kundenbeziehungen.",
    },
  ] as const

  const stats = [
    { value: "23+", label: "Jahre Erfahrung", tone: "blue" },
    { value: "2", label: "Generationen", tone: "red" },
    { value: "100%", label: "Schweizer Qualität", tone: "outline-blue" },
    { value: "1", label: "Mission: Ihr Lächeln", tone: "outline-red" },
  ] as const

  useSeoMeta({
    title,
    description,
    ogTitle: `${title} | ${config.public.siteName}`,
    ogDescription: description,
    ogType: "website",
    ogUrl: canonicalUrl,
    twitterCard: "summary_large_image",
    twitterTitle: `${title} | ${config.public.siteName}`,
    twitterDescription: description,
  })

  useHead({
    link: useCanonicalLinks({
      canonicalPath,
      enPath: canonicalPath,
      dePath: `/de${canonicalPath}`,
      xDefaultPath: canonicalPath,
    }),
  })
</script>

<template>
  <div>
    <SectionAboutHero
      title="Unsere Geschichte"
      lead="Von der Familientradition zur modernen GmbH – Eine Geschichte von Qualität, Vertrauen und Generationen"
    />
    <SectionAboutTimeline :items="timeline" />
    <SectionAboutValues
      title="Familientradition trifft Innovation"
      lead="Über 20 Jahre Erfahrung, vereint mit moderner Fachkompetenz – das macht uns zu Ihrem verlässlichen Partner für alle Facility Services."
      primary-image="/img/about-tradition.png"
      primary-caption="Professionelle Dienstleistungen seit 2002"
      :values="values"
      :stats="stats"
      secondary-image="/img/about-team.png"
      secondary-caption="Modernes Team mit Herz und Verstand"
    />
    <SectionAboutCta
      title="Bereit für erstklassige Facility Services?"
      lead="Erfahren Sie, wie wir mit über 20 Jahren Erfahrung und moderner Fachkompetenz auch Ihr Objekt perfekt betreuen können."
    />
  </div>
</template>
