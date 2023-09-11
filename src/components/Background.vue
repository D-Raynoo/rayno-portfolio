<template>
  <TresCanvas alpha window-size>
    <TresPerspectiveCamera :position="[0, 0, 500]" />

    <TresMesh ref="bgModel">
      <Suspense>
        <GLTFModel :path="bg3D" draco />
      </Suspense>
    </TresMesh>

    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" />
  </TresCanvas>
</template>

<script setup>
import { ref } from 'vue'
import bg3D from '@/assets/models/bg2/scene.gltf'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'

const { onLoop } = useRenderLoop()
const bgModel = ref(null)

onLoop(({ delta, elapsed }) => {
  if (bgModel.value) {
    bgModel.value.rotation.y += delta / 2
    bgModel.value.rotation.z = elapsed * 0.1
  }
})
</script>

<style>
</style>