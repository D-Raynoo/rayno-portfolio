<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex-col w-fit h-fit">
      <h1
        class="text-center whitespace-pre-wrap mb-4 w-2/3 sm:w-auto mx-auto text-4xl sm:text-5xl font-bold"
      >
        {{ $t("message.tools") }}
      </h1>
      <v-window
        v-model="onboarding"
        class="w-fit h-fit mx-auto"
        dir="ltr"
        show-arrows
      >
        <v-window-item class="w-fit px-20 mx-auto h-fit">
          <div class="w-fit h-fit">
            <h1 class="text-center text-3xl">
              {{ $t("message.toolsText.devTools") }}
            </h1>
            <div class="flex w-fit h-fit">
              <ul class="w-24 sm:w-36 h-fit my-auto list-disc">
                <li v-for="(tool, index) in devTools" :key="index">
                  {{ tool }}
                </li>
              </ul>
              <div
                class="w-36 sm:w-64 aspect-square cursor-grab flex items-center justify-center"
              >
                <TresCanvas shadows alpha>
                  <TresPerspectiveCamera :position="[0, 0, 15]" />
                  <OrbitControls
                    enable-damping
                    damping-factor="0.1"
                    :enable-zoom="false"
                  />
                  <TresMesh ref="devModel">
                    <Suspense>
                      <GLTFModel :path="devToolsModel" draco />
                    </Suspense>
                  </TresMesh>
                  <TresAmbientLight />
                  <TresDirectionalLight
                    :position="[-4, 8, 4]"
                    :intensity="3"
                    cast-shadow
                  />
                </TresCanvas>
              </div>
            </div>
          </div>
        </v-window-item>
        <v-window-item class="w-fit px-20 mx-auto h-fit">
          <div class="w-fit h-fit">
            <h1 class="text-center text-3xl">
              {{ $t("message.toolsText.designTools") }}
            </h1>
            <div class="flex w-fit h-fit">
              <ul class="w-24 sm:w-36 h-fit my-auto list-disc">
                <li v-for="(tool, index) in designTools" :key="index">
                  {{ tool }}
                </li>
              </ul>
              <div
                class="w-36 sm:w-64 aspect-square cursor-grab flex items-center justify-center"
              >
                <TresCanvas shadows alpha>
                  <TresPerspectiveCamera :position="[0, 0, 15]" />
                  <OrbitControls
                    enable-damping
                    damping-factor="0.1"
                    :enable-zoom="false"
                  />
                  <TresMesh ref="designModel">
                    <Suspense>
                      <GLTFModel :path="designToolsModel" draco />
                    </Suspense>
                  </TresMesh>
                  <TresAmbientLight />
                  <TresDirectionalLight
                    :position="[-4, 8, 4]"
                    :intensity="3"
                    cast-shadow
                  />
                </TresCanvas>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import devToolsModel from "/src/assets/models/logosDraco/allInOne/devTools/sceneDraco.gltf";
import designToolsModel from "/src/assets/models/logosDraco/allInOne/designTools/sceneDraco.gltf";
import { OrbitControls, GLTFModel } from "@tresjs/cientos";
import { useRenderLoop } from "@tresjs/core";

const { onLoop } = useRenderLoop();

const devModel = ref(null);
const designModel = ref(null);

const onboarding = ref(0);
const devTools = ref([
  "HTML&CSS",
  "JavaScript",
  "PHP",
  "Vue JS",
  "Laravel",
  "Tailwind CSS",
]);
const designTools = ref(["Adobe Photoshop", "Adobe Illustrator"]);

onLoop(() => {
  if (devModel.value) {
    devModel.value.rotation.y += 0.01;
  }
  if (designModel.value) {
    designModel.value.rotation.y += 0.01;
  }
});
</script>

<style>
</style>