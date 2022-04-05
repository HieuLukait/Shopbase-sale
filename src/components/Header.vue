<template>
  <q-header>
    <q-toolbar class="a bg-white text-light-blue-6">
      <q-toolbar-title class="text-h2"> SALE </q-toolbar-title>
      <q-input
        color="light-blue-6"
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
.a {
  height: 90px;
  border-bottom: 1px solid #00bfff;
}
</style>
