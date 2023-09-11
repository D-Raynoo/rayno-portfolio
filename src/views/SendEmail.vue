<template>
  <section class="w-full h-full flex justify-center items-center">
    <v-form
      v-model="valid"
      ref="emailForm"
      class="w-2/3 h-75"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        :label="$t('message.email.nameField')"
        name="from_name"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :error-messages="phone.errorMessage.value"
        :label="$t('message.email.phoneField')"
        name="phone_number"
      ></v-text-field>

      <v-text-field
        v-model="message.value.value"
        :error-messages="message.errorMessage.value"
        :label="$t('message.email.messageField')"
        name="message"
        class="h-50"
      ></v-text-field>

      <v-btn :loading="loading" color="indigo-darken-3" type="submit">{{
        $t("message.email.sendButton")
      }}</v-btn>
    </v-form>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { onMounted, ref } from "vue";
import { useRenderLoop } from "@tresjs/core";
import { useField, useForm } from "vee-validate";
const { resume } = useRenderLoop();

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(value))
        return true;

      return "Phone number needs to be at least 9 digits.";
    },
    message(value) {
      if (value?.length >= 2) return true;

      return "Message needs to be at least 2 characters.";
    },
  },
});

const name = useField("name");
const phone = useField("phone");
const message = useField("message");

const loading = ref(false);
const emailForm = ref(null);

onMounted(() => {
  resume();
});

function sendEmail() {
  loading.value = true;
  emailjs
    .sendForm(
      "service_c74otae",
      "template_t6uwipk",
      emailForm.value.$el,
      "HiLOX2kEmGOwWrMM2"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        loading.value = false;
        handleReset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        loading.value = false;
      }
    );
}

const submit = handleSubmit((values) => {
  sendEmail();
});
</script>

<style>
</style>