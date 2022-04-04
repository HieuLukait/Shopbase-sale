<template>
  <div class="q-pa-md">
    <div id="q-app">
      <div class="q-pa-md topProduct ">
        <q-table
         title="TOP PRODUCT"
        v-model:expanded="expanded"
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
    sortable: true,
  },
  {
    name: "title",
    required: true,
    label: "Title",
    align: "left",
    field: (row) => row.title,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const rows = [
  {
    name: "#1",
    title:"Ice cream sandwich"
  },
  {
    name: "#2",
    title:"Ice cream sandwich"
  },
  {
    name: "#3",
    title:"Ice cream sandwich"
  },
  {
    name: "#4",
    title:"Ice cream sandwich"
  },
  {
    name: "#5",
    title:"Ice cream sandwich"
  },
  ]

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
.topProduct{
    width: 520px;
}
</style>
