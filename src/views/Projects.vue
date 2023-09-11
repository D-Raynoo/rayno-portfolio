<template>
  <section class="w-full h-full flex-col justify-center items-center">
    <h1 class="text-4xl sm:text-5xl my-6 text-center font-bold">
      {{ $t('message.projects.title') }}
    </h1>
    <v-row>
      <div
        class="flex flex-col justify-center items-center mx-auto w-fit"
        v-for="(project, index) in projects"
        :key="index"
      >
        <h1 class="my-2 text-xl text-center font-bold">
          {{ project.title }}
        </h1>
        <Tilt
          :parallax="true"
          :options="tiltOptions"
          ref="tilt"
          class="w-fit flex justify-center h-fit rounded-lg overflow-hidden cursor-pointer"
          @click="openInNewTab(project.url)"
        >
          <v-img
            :width="300"
            aspect-ratio="1/2"
            class="flex justify-center items-center"
            cover
            :src="project.screenShot"
            :lazy-src="project.lazyScreenShot"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </Tilt>
      </div>
    </v-row>

    <h1 class="w-fit text-3xl text-center sm:text-5xl my-6 mx-auto font-bold">
      {{ $t('message.projects.message') }}
    </h1>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Tilt from 'vanilla-tilt-vue'
import smartHome from '../assets/images/smart-home-screenshot.jpg'
import lazySmartHome from '../assets/images/smart-home-screenshot-blured.jpg'
import { useRenderLoop } from '@tresjs/core'

const { resume } = useRenderLoop()
const projects = ref([
  {
    title: 'smart-home landing page',
    screenShot: smartHome,
    lazyScreenShot: lazySmartHome,
    url: 'https://smart-home-rayno.netlify.app/'
  }
])
const tiltOptions = ref({
  startX: -30,
  scale: 1.1,
  glare: true
})
const tilt = ref(null)

onMounted(() => {
  resume()
})

function openInNewTab(url) {
  window.open(url, '_blank').focus()
}
</script>

<style scpoed>
</style>