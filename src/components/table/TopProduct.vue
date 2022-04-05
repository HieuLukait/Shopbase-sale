<template>
  <div class="q-pa-md">
    <div id="q-app">
      <div class="q-pa-md topProduct">
        <q-table
          class="recipe-units-table"
          title="TOP PRODUCT"
          v-model:expanded="expanded"
          :rows="rows"
          :columns="columns"
          row-key="name"
          hide-header
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                <span v-if="col.name != 'product_image'"> {{ col.value }}</span>

                <q-avatar
                  v-if="col.name == 'product_image'"
                  size="65px"
                  class="shadow-10"
                  square
                >
                  <img :src="props.row.product_image" />
                </q-avatar>
              </q-td>
            </q-tr>
          </template>
        </q-table>
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
    name: "product_image",
    label: "Product image",
    align: "left",
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
    product_image: "",
    title: "Ice cream sandwich",
  },
  {
    name: "#2",
    product_image: "",
    title: "Ice cream sandwich",
  },
  {
    name: "#3",
    product_image: "",
    title: "Ice cream sandwich",
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
.topProduct {
  width: 700px;
}
.recipe-units-table >>> .q-table__top {
  background-color: #33adff;

  color: white;
}
</style>
