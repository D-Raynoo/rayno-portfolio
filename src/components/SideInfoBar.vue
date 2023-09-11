<template>
  <aside
    class="h-full text-center rounded-lg overflow-x-hidden overflow-y-auto text-neutral-100 bg-transparent backdrop-blur-sm"
  >
    <div class="image-container-shadow w-full h-fit">
      <div class="image-container hover:scale-105 duration-200 aspect-[7/8] w-full overflow-hidden">
        <ProgressiveImage
          class="w-full h-auto transition-all block object-cover duration-150 hover:scale-150 hover:translate-y-[25%]"
          :src="raynoPicture"
          cover
        />
      </div>
    </div>
    <div class="bg-[rgba(255,255,255,0.14)] text-neutral-100 m-4 rounded p-3">
      <h1 class="w-full text-xl m-0">
        <strong>{{ $t('message.fullName') }}</strong>
      </h1>
    </div>

    <div
      class="bg-[rgba(255,255,255,0.14)] text-neutral-100 m-4 rounded text-sm"
      :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
    >
      <h1 class="text-center text-xl border-b-2 p-3 w-full m-0">
        <strong>{{ $t('message.profession') }}</strong>
      </h1>
      <div class="p-3 text-neutral-100">
        <span class="mb-3 block"
          ><v-icon icon="mdi-school" :class="$i18n.locale === 'ar' ? 'ml-2' : 'mr-2'"></v-icon
          >{{ $t('message.education.university') }}</span
        >
        <span class="block"
          ><v-icon icon="mdi-map-marker" :class="$i18n.locale === 'ar' ? 'ml-2' : 'mr-2'"></v-icon
          >{{ $t('message.location') }}</span
        >
      </div>
    </div>

    <div class="my-0 mx-auto w-[80%] h-fit flex justify-around text-neutral-100">
      <a href="https://www.instagram.com/da_vvolf/" target="_blank">
        <v-icon icon="mdi-instagram" class="hover:scale-125 transition-all duration-200"> </v-icon>
      </a>
      <a href="https://www.facebook.com/ryan.rezougui.9/" target="_blank">
        <v-icon icon="mdi-facebook" class="hover:scale-125 transition-all duration-200"></v-icon>
      </a>
      <a href="https://www.linkedin.com/in/rayan-zin-eddine-r-b6125a280/" target="_blank">
        <v-icon icon="mdi-linkedin" class="hover:scale-125 transition-all duration-200"></v-icon>
      </a>
    </div>
  </aside>
</template>

<script setup>
import raynoPicture from '../assets/images/raynoPortfolio.webp'
import { ProgressiveImage } from 'vue-progressive-image'
</script>

<style scoped>
div.image-container {
  -webkit-clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
  clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
}

div.image-container:hover {
  filter: drop-shadow(0 6px 5px rgba(0, 0, 0, 0.3));
}
</style>