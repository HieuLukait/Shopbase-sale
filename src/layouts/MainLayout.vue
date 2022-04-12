<template>
  <q-layout class="body" view="lHh Lpr lFf">
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "components/Header.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Header,
  },

  setup() {
    return {};
  },
});
</script>
<style scoped></style>
