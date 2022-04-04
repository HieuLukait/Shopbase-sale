<template>
  <div class="q-pa-md">
    <div id="q-app">
      <div class="topSale q-pa-md">
        <q-table
        title="TOP DOMAIN"
          :rows="rows"
          :columns="columns"
          row-key="name"
          hide-header
          hide-bottom
        ></q-table>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "#1",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "domain",
    required: true,
    label: "Domain",
    align: "left",
    field: (row) => row.domain,
    format: (val) => `${val}`,
  },
];

const rows = [
  {
    name: "#1",
    domain: "https://quasar.dev/vue-components",

  },
  {
    name: "#2",
    domain: "https://quasar.dev/vue-components",

  },
  {
    name: "#3",
    domain: "https://quasar.dev/vue-components",

  },
  {
    name: "#4",
    domain: "https://quasar.dev/vue-components",

  },
  {
    name: "#5",
    domain: "https://quasar.dev/vue-components",

  },
  
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style>
.topSale{
    width:520px;
}

</style>
