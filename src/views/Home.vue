<template>
  <div
    class="w-fit h-fit grid grid-cols-1 gap-y-3 m-auto auto-rows-max place-items-center"
  >
    <h1
      class="text-3xl text-center px-5 text-neutral-100 whitespace-pre-wrap filter drop-shadow-xl"
    >
      <strong>{{ $t("message.selfPresentation") }}</strong>
    </h1>
    <div
      class="z-50 w-1/3 aspect-square cursor-grab flex items-center justify-center"
    >
      <TresCanvas alpha shadows>
        <TresPerspectiveCamera :position="[0, 4, 10]" />
        <OrbitControls
          enable-damping
          damping-factor="0.1"
          :enable-zoom="false"
        />

        <Suspense>
          <GLTFModel :path="pcModel" draco />
        </Suspense>
        <TresAmbientLight />
        <TresDirectionalLight
          :position="[-4, 8, 4]"
          :intensity="3"
          cast-shadow
        />
      </TresCanvas>
    </div>

    <div class="flex w-fit h-auto items-center gap-4">
      <v-btn
        size="x-large"
        elevation="20"
        :loading="loading"
        @click="load"
        link
        to="/portfolio"
      >
        {{ $t("message.exploreButton") }}
        <template v-slot:loader>
          <v-progress-circular indeterminate></v-progress-circular>
        </template>
      </v-btn>
      <v-select
        v-model="$i18n.locale"
        :items="$i18n.availableLocales"
        density="compact"
        variant="solo-filled"
        ref="vselect"
        bg-color="rgba(255,255,255,0.14)"
        color="rgb(212 212 212)"
        base-color="rgb(245 245 245)"
      ></v-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { OrbitControls, GLTFModel } from "@tresjs/cientos";
import pcModel from "@/assets/models/computerV2/scene.gltf";

const loading = ref(false);

function load() {
  loading.value = true;
}
</script>

<style>
.v-input__details {
  display: none !important;
}
</style>
