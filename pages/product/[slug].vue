<template>
  <div class="container mx-auto p-1 desktop text-body md:p-5">
    <div v-if="pending" class="text-center">
      Načítám...
    </div>
    <div v-else-if="error" class="text-center text-red">
      {{ error }}
    </div>
    <div v-else-if="data && product">
      <div class="grid gap-4 lg:grid-cols-2">
        <div class="p-3 lg:order-2">
          <h1 class="mb-5 text-h1">{{ product.name }}</h1>
          <div v-if="product.badges && product.badges.items" class="flex flex-wrap items-center gap-1 text-sm">
            <span v-for="(badge, index) in product.badges.items" :key="index" :style="formatBadge(badge)" class="whitespace-nowrap bg-black px-2 text-white p-0.5">
              {{ badge.name }}
            </span>
          </div>
          <div class="my-5 text-sm text-gray">
            Kod produktu: {{ product.code }}
          </div>
          <div class="my-5 flex items-center text-sm text-gray">
            <span>
              Značka:
            </span>
            <template v-if="product.brand && product.brand.imagePath">
              <span>
                <img :src="config.public.urlImages + product.brand.imagePath" width="30" height="30" :alt="product.brand.name" class="object-contain max-h-[30px]">
              </span>
            </template>
            <span>
              {{ product.brand.name }}
            </span>
          </div>
          <div class="my-5 text-sm">
            <p class="text-base">{{ product.annotation }}</p>
          </div>
          <div class="bg-gray-100 p-5 font-semibold">
            <p :class="{ 'text-green': product.stockAvailability.maxStoredCount > 0, 'text-red': product.stockAvailability.maxStoredCount === 0 }" class="mb-1 text-sm">
              {{ formatStock(product.stockAvailability.maxStoredCount) }}
            </p>
            <template v-if="product.price.originalPrice !== null && product.price.price !== null">
              <p class="font-normal text-md text-gray-dark">
                <s class="mr-2">{{ formatPrice(product.price.originalPrice) }}</s>
                <Icon name="InfoIcon" title="Sleva" />
                <span class="ml-2 bg-black p-1 text-sm text-white">{{ formatDiscount(product.price.originalPrice, product.price.price) }}</span>
              </p>
              <p class="text-lg font-normal">
                {{ formatPrice(product.price.price) }}
              </p>
            </template>
            <template v-else>
              <p class="text-lg font-normal">
                {{ formatPrice(product.price.price) }}
              </p>
            </template>
          </div>
        </div>
        <div class="grid p-3 lg:order-1">
          <div v-if="image" class="mx-auto">
            <img :src="config.public.urlImages + image.path" :alt="product.name" class="max-h-[600px]">
          </div>
          <div v-if="gallery" class="mt-10 flex flex-wrap items-center max-lg:justify-center gap-5">
            <div v-for="image in gallery" :key="image.path">
              <template v-if="image.type === ProductGalleryItemType.IMAGE">
                <img :src="config.public.urlImages + image.path" width="100" height="100" :alt="product.name" class="object-contain max-h-[100px]">
              </template>
              <template v-else-if="image.type === ProductGalleryItemType.YOUTUBE">
                <iframe :src="formatYoutubePath(image.path)" width="150" height="100" frameborder="0" allowfullscreen></iframe>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5" v-if="data && product.isWithAccessories && accessories">
        <div class="p-3">
          <h2 class="mb-5 text-h2">Příslušenství</h2>
          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="accessory in accessories" :key="accessory.code" class="border-2 p-2 transition product hover:border-yellow-600 md:p-5">
              <img :src="config.public.urlImages + '/' + accessory.mainImagePath" width="250" height="250" class="mx-auto object-contain max-h-[250px]" loading="lazy" :alt="product.name">
              <h3 class="mt-5 mb-5 leading-tight text-h3">
                <NuxtLink :to="`/product/${accessory.slug}`">{{ accessory.name }}</NuxtLink>
              </h3>
              <p class="text-base text-gray-dark">{{ accessory.annotation }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Gallery, Product } from '~/types/Product'
import { ProductGalleryItemType } from '~/types/ProductGalleryEnum'

const config = useRuntimeConfig()
const route = useRoute()
const { slug } = route.params

let product: Product | null = null
let accessories: Product[] | null = null
let image: Gallery | null = null;
let gallery: Gallery[] | null = null;

const { data, pending, error } = await useAsyncData('data', async () => {
  try {
    product = await $fetch('/api/products/' + slug)

    if (product && product.isWithAccessories) {
      accessories = await $fetch('/api/accessories/' + slug)
    }

    return {
      product,
      accessories,
    }
  } catch (error) {
    return {
      product: null,
      accessories: null,
    }
  }
})

if (data && data.value) {
  if (!data.value.product) {
    throw createError({
      statusCode: 404,
    })
  }

  product = data.value.product
  accessories = data.value.accessories || null
  image = getImage(product) || null
  gallery = getGallery(product) || null

  if (product) {
    useSeoMeta({
      title: product?.name,
      description: product?.annotation,
      ogTitle: product?.name,
      ogDescription: product?.annotation,
      ogImage: image ? config.public.urlImages + image.path : null,
      ogUrl: route.fullPath,
      twitterTitle: product?.name,
      twitterDescription: product?.annotation,
      twitterImage: image ? config.public.urlImages + image.path : null,
      twitterCard: 'summary'
    })
  }
}
</script>

<style scoped>
.product {
  position: relative;

  a {
    &:after {
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      content: '';
    }
  }
}
</style>
