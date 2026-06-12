<script setup lang="ts">
  type TimelineItem = {
    year: string
    title: string
    text: string
    side: "left" | "right"
    tone: "blue" | "red" | "white" | "gradient"
  }

  defineOptions({ name: "SectionAboutTimeline" })

  const p = defineProps<{
    items: readonly TimelineItem[]
  }>()

  function cardClass(item: TimelineItem) {
    if (item.tone === "blue") return "bg-brand-blue text-white"
    if (item.tone === "red") return "bg-brand-red text-white"
    if (item.tone === "gradient") return "about-gradient-horizontal text-white"
    return "border border-brand-ink bg-white text-brand-blue"
  }

  function yearClass(item: TimelineItem) {
    if (item.tone === "red") return "bg-white text-brand-red"
    if (item.tone === "white") return "bg-brand-blue text-white"
    return "bg-brand-red text-white"
  }
</script>

<template>
  <div class="contents">
    <section class="bg-white px-6 py-20 text-brand-ink xl:hidden">
      <div class="relative mx-auto">
        <div
          class="absolute bottom-0 left-4 top-0 w-1 bg-brand-blue"
          aria-hidden="true"
        />

        <ol class="relative space-y-14">
          <li
            v-for="(item, index) of p.items"
            :key="item.year"
            class="relative grid min-h-[330px] grid-cols-[2rem_1fr] items-center gap-5"
          >
            <article
              class="col-start-2 rounded-[1.25rem] px-7 py-10 text-center"
              :class="cardClass(item)"
            >
              <span
                class="mx-auto block max-w-[233px] rounded-full px-8 py-2.5 text-2xl font-bold lg:text-[30px]"
                :class="yearClass(item)"
              >
                {{ item.year }}
              </span>
              <h2 class="mt-7 text-2xl font-bold lg:text-[30px]">
                {{ item.title }}
              </h2>
              <p class="mt-6 text-base leading-7 lg:text-lg">
                {{ item.text }}
              </p>
            </article>

            <span
              class="absolute left-4 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full"
              :class="index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-blue'"
              aria-hidden="true"
            />
          </li>
        </ol>
      </div>
    </section>

    <section class="hidden bg-white py-20 text-brand-ink xl:block">
      <div
        class="mx-auto flex max-w-[1274px] items-center justify-center gap-[30px]"
      >
        <div class="flex w-[590px] flex-col gap-[459px]">
          <article
            v-for="item of p.items.filter((entry) => entry.side === 'left')"
            :key="item.year"
            class="flex w-[590px] flex-col items-center justify-center gap-6 rounded-[1.25rem] px-12 text-center"
            :class="[
              cardClass(item),
              item.year === '2025' ? 'h-[418px]' : 'h-[359px]',
            ]"
          >
            <span
              class="block w-[233px] rounded-full px-8 py-2.5 text-[30px] font-bold"
              :class="yearClass(item)"
            >
              {{ item.year }}
            </span>
            <h2 class="text-[30px] font-bold">{{ item.title }}</h2>
            <p class="text-lg leading-7">{{ item.text }}</p>
          </article>
        </div>

        <div class="relative h-[2054px] w-[34px] shrink-0" aria-hidden="true">
          <span
            class="absolute bottom-0 left-1/2 top-0 w-1 -translate-x-1/2 bg-brand-blue"
          />
          <span
            v-for="(dot, index) of [179.5, 589.5, 997.5, 1464.5, 1845]"
            :key="dot"
            class="absolute left-1/2 size-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            :class="index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-blue'"
            :style="{ top: `${dot}px` }"
          />
        </div>

        <div class="flex w-[590px] flex-col gap-[516px]">
          <article
            v-for="item of p.items.filter((entry) => entry.side === 'right')"
            :key="item.year"
            class="flex h-[359px] w-[590px] flex-col items-center justify-center gap-6 rounded-[1.25rem] px-12 text-center"
            :class="cardClass(item)"
          >
            <span
              class="block w-[233px] rounded-full px-8 py-2.5 text-[30px] font-bold"
              :class="yearClass(item)"
            >
              {{ item.year }}
            </span>
            <h2 class="text-[30px] font-bold">{{ item.title }}</h2>
            <p class="text-lg leading-7">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
