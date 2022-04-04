<template>
  <q-page-container>
    <div class="flex justify-center">
      <div>
        <TopSale />
      </div>
      <div>
        <TopProduct />
      </div>
    </div>
    <FilterDate />
    <FilterCountry />
    <Table />
    <router-view />
  </q-page-container>
</template>

<script>
import Table from "components/table/Table.vue";
import TopSale from "components/table/TopSale.vue";
import TopProduct from "components/table/TopProduct.vue";
import FilterDate from "components/FilterDate.vue";
import FilterCountry from "components/FilterCountry.vue";
export default {
  components: {
    FilterDate,
    Table,
    TopSale,
    TopProduct,
    FilterCountry
  },
};
</script>

<style></style>
