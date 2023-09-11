<script setup>
import SideInfoBar from "@/components/SideInfoBar.vue";
import { ref, onMounted } from "vue";
import { useRenderLoop } from "@tresjs/core";

const { resume } = useRenderLoop();
onMounted(() => {
  resume();
});

const drawer = ref(false);
</script>

<template>
  <div class="flex relative lg:gap-4 p-4 h-full w-full">
    <side-info-bar
      id="to-scroll"
      class="shadow-[0_4px_30px_rgba(0,0,0,0.1)] hidden lg:block w-1/5 h-full backdrop-blur-[3px] col border border-solid border-[rgba(255,255,255,0.05)]"
    />
    <div class="lg:hidden">
      <v-layout class="d-lg-none">
        <v-navigation-drawer
          class="bg-blue-grey-lighten-1 d-lg-none rounded-lg"
          v-model="drawer"
        >
          <side-info-bar
            id="to-scroll"
            class="shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full h-full backdrop-blur-[3px] col border border-solid border-[rgba(255,255,255,0.05)]"
          />
        </v-navigation-drawer>
      </v-layout>
    </div>

    <div
      class="rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3px] lg:w-4/5 w-full h-full border border-solid border-[rgba(255,255,255,0.05)] overflow-hidden text-neutral-100"
    >
      <v-toolbar
        color="rgba(255,255,255,0.14)"
        class="px-2"
        density="comfortable"
      >
        <div class="w-fit h-fit lg:hidden">
          <v-btn icon @click="drawer = !drawer">
            <v-icon
              icon="mdi-chevron-right"
              class="m-auto"
              color="rgb(245 245 245)"
            ></v-icon>
          </v-btn>
        </div>

        <v-spacer class="lg:hidden"></v-spacer>
        <v-btn icon link to="/portfolio/rayno">
          <v-icon
            icon="mdi-account"
            class="m-auto"
            color="rgb(245 245 245)"
          ></v-icon>
        </v-btn>

        <v-btn icon link to="/portfolio/skills">
          <v-icon
            icon="mdi-tools"
            class="m-auto"
            color="rgb(245 245 245)"
          ></v-icon>
        </v-btn>

        <v-btn icon link to="/portfolio/projects">
          <v-icon
            icon="mdi-creation"
            class="m-auto"
            color="rgb(245 245 245)"
          ></v-icon>
        </v-btn>

        <v-btn icon link to="/portfolio/send-email">
          <v-icon
            icon="mdi-email-arrow-right"
            class="m-auto"
            color="rgb(245 245 245)"
          ></v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <div class="w-1/7">
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
      </v-toolbar>

      <div
        id="to-scroll"
        class="flex justify-center items-center py-6 px-5 sm:px-10 lg:px-20 h-[91%] w-full overflow-y-auto"
      >
        <RouterView name="b" class="h-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#to-scroll::-webkit-scrollbar {
  width: 4px;
  cursor: pointer;
  /*background-color: rgba(229, 231, 235, var(--bg-opacity));*/
}
#to-scroll::-webkit-scrollbar-track {
  background-color: rgba(229, 231, 235, var(--bg-opacity));
  cursor: pointer;
  /*background: red;*/
}
#to-scroll::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: #a0aec0;
  /*outline: 1px solid slategrey;*/
}
</style>
