<template>
  <section class="w-full h-fit pb-5  ">
    <div class="h-fit ">
        <h1 class="w-fit text-4xl sm:text-5xl mb-6 font-bold ">{{ $t('message.aboutTitle') }}</h1>
        <p 
        :class=" $i18n.locale=='ar' ? 
        'whitespace-pre-wrap mb-6 text-right text-base   font-bold':
        'whitespace-pre-wrap mb-6 text-left text-base   font-bold'"
        >
          {{ $t('message.summary') }}
        </p>
      </div>

      <div :class=" $i18n.locale=='ar' ? 'text-right   h-max  ':'text-left   h-max ' ">
        <h1 class="w-fit text-4xl sm:text-5xl mb-6 font-bold ">
          {{ $t('message.workExperience.title') }}
        </h1>
        <p class="whitespace-pre-wrap mb-6 text-base">
          <strong>{{ $t('message.workExperience.period.periodTitle') }}:</strong>
          {{ $t('message.workExperience.period.period') }}<br />
          <strong>{{ $t('message.workExperience.position.positionTitle') }}:</strong>
          {{ $t('message.workExperience.position.position') }}<br/>
          <strong>{{ $t('message.workExperience.responsibilities.responsibilitiesTitle') }}:</strong><br/>
          <ul >
            <li v-for="(responsibilitie,index) in responsibilities" :key="index">
              {{ responsibilitie }}
            </li>
          </ul>
        </p>
      </div>
  </section>
      

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRenderLoop } from '@tresjs/core'

const { resume } = useRenderLoop()

onMounted(() => {
  resume()
})

const i18n = useI18n()
const responsibilities = ref([
  i18n.t('message.workExperience.responsibilities.responsibilities.c'),
  i18n.t('message.workExperience.responsibilities.responsibilities.d'),
  i18n.t('message.workExperience.responsibilities.responsibilities.a'),
  i18n.t('message.workExperience.responsibilities.responsibilities.e'),
  i18n.t('message.workExperience.responsibilities.responsibilities.b'),
  i18n.t('message.workExperience.responsibilities.responsibilities.f'),
  i18n.t('message.workExperience.responsibilities.responsibilities.g'),
  i18n.t('message.workExperience.responsibilities.responsibilities.h'),
  i18n.t('message.workExperience.responsibilities.responsibilities.i'),
  i18n.t('message.workExperience.responsibilities.responsibilities.j'),
  i18n.t('message.workExperience.responsibilities.responsibilities.k')
])

watch(i18n.locale, () => {
  responsibilities.value = [
    i18n.t('message.workExperience.responsibilities.responsibilities.c'),
    i18n.t('message.workExperience.responsibilities.responsibilities.d'),
    i18n.t('message.workExperience.responsibilities.responsibilities.a'),
    i18n.t('message.workExperience.responsibilities.responsibilities.e'),
    i18n.t('message.workExperience.responsibilities.responsibilities.b'),
    i18n.t('message.workExperience.responsibilities.responsibilities.f'),
    i18n.t('message.workExperience.responsibilities.responsibilities.g'),
    i18n.t('message.workExperience.responsibilities.responsibilities.h'),
    i18n.t('message.workExperience.responsibilities.responsibilities.i'),
    i18n.t('message.workExperience.responsibilities.responsibilities.j'),
    i18n.t('message.workExperience.responsibilities.responsibilities.k')
  ]
})
</script>

<style>
</style>