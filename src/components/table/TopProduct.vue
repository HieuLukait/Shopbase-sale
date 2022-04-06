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
    product_image:
      "https://hanoicomputercdn.com/media/product/47571_rog_strix_x570_e_gaming_aura_sync_01.png",
    title: "Mainboard ASUS ROG STRIX X570-E GAMING	",
  },
  {
    name: "#2",
    product_image: "https://anphat.com.vn/media/product/36985_h732__10_.png",
    title: "VGA ASUS ROG Strix Radeon RX 6700 XT OC 12GB	",
  },
  {
    name: "#3",
    product_image:
      "https://hanoicomputercdn.com/media/product/60263_ram_desktop_gskill_trident_z_royal_elite_f4_4000c16d_32gteg_32gb_2x16gb_ddr4_4000mhz_1.jpg",
    title: "	Ram Desktop Gskill Trident Z Royal Elite",
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
  width: 650px;
}
.recipe-units-table >>> .q-table__top {
  background-color: #33adff;

  color: white;
}
</style>
