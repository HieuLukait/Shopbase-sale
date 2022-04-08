<template>
  <q-page-container>
    <div class="flex justify-center">
        <TopSale />
        <TopProduct />
      </div>
    <Table />
    <router-view />
  </q-page-container>
</template>
<script>
import Table from "components/table/Table.vue";
import TopSale from "components/table/TopSale.vue";
import TopProduct from "components/table/TopProduct.vue";
export default {
  components: {
    Table,
    TopSale,
    TopProduct,

  },
};
</script>

<style></style>
