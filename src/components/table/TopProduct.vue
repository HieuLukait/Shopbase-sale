<template>
  <div class="q-pa-md">
    <div id="q-app">
      <div class="q-pa-md topProduct">
        <q-scroll-area
          style="
            height: 300px;
            max-width: 650px;
            border: 1px solid #33adff;
            border-radius: 5px;
          "
        >
          <q-table
            class="recipe-units-table"
            title="TOP PRODUCT"
            v-model:expanded="expanded"
            :rows="product"
            :columns="columns"
            row-key="name"
            hide-header
           
          >
          <template v-slot:body="props">
              <q-tr :props="props">
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                  <span v-if="col.name != 'product_title'">{{col.value}}</span>
                  <span v-if="col.name == 'product_title'">
                    <a
                      style="text-decoration: none; color: black"
                      :href="`${props.row.domain}/${props.row.product_handle}`"
                      >{{ col.value }}</a
                    >
                  </span>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    name: "product_title",
    required: true,
    label: "Title",
    align: "left",
    field: "product_title",
  },
  {
    name: "product_image",
    label: "Product image",
    align: "left",
    field: "count",
  },
];

const rows = [];

export default {
  setup() {
    return {
      columns,
      rows,
      product: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.$myApi.sale
        .getProduct()
        .then((res) => {
          this.product = res.data;
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
.topProduct {
  width: 650px;
}
.recipe-units-table >>> .q-table__top {
  background-color: #33adff;

  color: white;
}
.recipe-units-table {
  height: 300px;
  max-width: 650px;
  border-radius: 5px;
}
</style>
