<template>
  <div class="q-pa-md">
    <div id="q-app">
      <div class="topSale q-pa-md">
        <q-table
        class="recipe-units-table"
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
    domain: "https://www.hanoicomputer.vn/",

  },
  {
    name: "#2",
    domain: "https://www.anphatpc.com.vn/",

  },
  {
    name: "#3",
    domain: "https://memoryzone.com.vn/",

  },
  {
    name: "#4",
    domain: "	https://thanhcongcomputer.vn/",

  },
  {
    name: "#5",
    domain: "https://laptopk1.vn/",

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

<style scoped>
.topSale{
    width:650px;
}
.recipe-units-table >>> .q-table__top{
  background-color:#33adff;

  color: white;}

</style>
