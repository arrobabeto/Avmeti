<script setup lang="ts">
  import AvIcon from "~/components/common/AvIcon.vue"

  type ValueItem = {
    icon: "handshake" | "medal" | "heart"
    title: string
    text: string
  }

  defineOptions({ name: "SectionAboutValues" })

  defineProps<{
    title: string
    lead: string
    primaryImage: string
    primaryCaption: string
    values: readonly ValueItem[]
    stats: readonly {
      value: string
      label: string
      tone: "blue" | "red" | "outline-blue" | "outline-red"
    }[]
    secondaryImage: string
    secondaryCaption: string
  }>()
</script>

<template>
  <section class="text-brand-ink">
    <div class="bg-[#f4f4f4] px-6 py-20 lg:px-[120px] lg:pb-[67px]">
      <div class="mx-auto max-w-[1272px]">
        <header class="text-center">
          <h2
            class="text-4xl font-bold text-brand-blue sm:text-5xl lg:text-[56px]"
          >
            {{ title }}
          </h2>
          <span class="mx-auto mt-7 block h-1.5 w-36 bg-brand-red" />
          <p class="mx-auto mt-8 max-w-5xl text-base leading-7 lg:text-lg">
            {{ lead }}
          </p>
        </header>

        <div class="mt-24 grid items-center gap-6 lg:grid-cols-2">
          <figure class="relative overflow-hidden rounded-[3.5rem]">
            <NuxtImg
              :src="primaryImage"
              alt=""
              class="aspect-[624/491] w-full object-cover"
            />
            <figcaption
              class="absolute bottom-6 left-6 rounded-[1.35rem] bg-white px-5 py-4 text-base font-bold text-brand-blue lg:text-lg"
            >
              {{ primaryCaption }}
            </figcaption>
          </figure>

          <div class="space-y-7">
            <article
              v-for="value of values"
              :key="value.title"
              class="flex min-h-[142px] items-center gap-5 rounded-[1.25rem] bg-white px-8 py-7 shadow-[0_4px_35px_rgba(0,0,0,0.22)]"
            >
              <span
                class="about-gradient-horizontal grid size-[52px] shrink-0 place-items-center rounded-xl p-3.5 text-white"
              >
                <AvIcon :name="value.icon" />
              </span>
              <div>
                <h3 class="text-xl font-bold text-brand-blue lg:text-2xl">
                  {{ value.title }}
                </h3>
                <p class="mt-3 text-base leading-6 text-brand-blue">
                  {{ value.text }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white px-6 py-20 lg:px-[120px]">
      <div
        class="mx-auto grid max-w-[1272px] items-center gap-6 lg:grid-cols-2"
      >
        <div class="grid grid-cols-2 gap-5">
          <article
            v-for="stat of stats"
            :key="stat.label"
            class="rounded-[1.25rem] border px-5 py-7 text-center"
            :class="{
              'border-brand-blue bg-brand-blue text-white':
                stat.tone === 'blue',
              'border-brand-red bg-brand-red text-white': stat.tone === 'red',
              'border-brand-blue bg-white text-brand-blue':
                stat.tone === 'outline-blue',
              'border-brand-red bg-white text-brand-red':
                stat.tone === 'outline-red',
            }"
          >
            <strong class="block text-3xl font-bold">{{ stat.value }}</strong>
            <span class="mt-1 block text-base lg:text-lg">
              {{ stat.label }}
            </span>
          </article>
        </div>

        <figure class="relative overflow-hidden rounded-[3.5rem]">
          <NuxtImg
            :src="secondaryImage"
            alt=""
            class="aspect-[624/491] w-full object-cover"
          />
          <figcaption
            class="absolute bottom-6 left-6 rounded-[1.35rem] bg-white px-5 py-4 text-base font-bold text-brand-blue lg:text-lg"
          >
            {{ secondaryCaption }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
