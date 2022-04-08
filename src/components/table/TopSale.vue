<template>
  <div class="q-pa-md">
    <div id="q-app">
      <div class="topSale q-pa-md">
        <q-scroll-area
          style="
            height: 250px;
            max-width: 650px;
            border: 1px solid #33adff;
            border-radius: 5px;
          "
          ><q-table
            class="recipe-units-table"
            title="TOP DOMAIN"
            :rows="domains"
            :columns="columns"
            row-key="name"
            hide-header
            hide-bottom
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                  <span v-if="col.name == 'domain'"></span>
                  <span v-else-if="col.name != 'product_image'">
                    {{ col.value }}</span
                  >
                  <span v-if="col.name == 'domain'">
                    <a
                      style="text-decoration: none; color: black"
                      :href="`${col.value}`"
                      >{{ col.value }}</a
                    >
                  </span>
                </q-td>
              </q-tr>
            </template></q-table
          ></q-scroll-area
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const columns = [
  {
    name: "index",
    required: true,
    label: "#",
    align: "left",
  },
  {
    name: "domain",
    required: true,
    label: "Domain",
    align: "left",
    field: "domain",
     format: (val) => `${val}`,

  },
  {
    name: "sale",
    required: true,
    label: "Sales",
    align: "left",
    field: "sales_count",
  },
];
const rows = [];

export default {
  setup() {
    return {
      columns,
      rows,
      domains: [],
      country: null,
    };
  },
  mounted(){
    this.getTopDomain()
  },
  methods: {
    getTopDomain() {
      this.$myApi.sale
      .getTopDomain()
        .then((res) => {
          this.domains = res.data;
          console.log(this.domains);
        })
        .catch((err) => {
          Object.keys(err.response.data.errors).forEach((key) => {
            err.response.data.errors[key].forEach((msg) => {
              this.$notify.create({
                message: msg,
                color: "negative",
              });
            });
          });
        });
    },
  },
};
</script>

<style scoped>
.topSale {
  width: 650px;
}
.recipe-units-table >>> .q-table__top {
  background-color: #33adff;
  color: white;
}
.recipe-units-table{
          height: 250px;
            max-width: 650px;
            border-radius: 5px;
}
</style>
