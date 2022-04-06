<template>
  <div class="q-pa-md">
    <q-table
      class="recipe-units-table my-sticky-header-table"
      title-class="table-title"
      title="Sales"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input dense debounce="400" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <span v-if="col.name == 'domain'"></span>
            <span v-else-if="col.name != 'product_image'">
              {{ col.value }}</span
            >
            <q-avatar
              v-if="col.name == 'product_image'"
              size="100px"
              class="shadow-10"
              square
              @click="
                selectedImage = props.row.product_image;
                dialog = true;
              "
            >
              <img :src="props.row.product_image" />
            </q-avatar>
            <span v-if="col.name == 'domain'">
              <a
                style="text-decoration: none; color: #000000 "
                :href="`${col.value}`"
                >{{ col.value }}</a
              >
            </span>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog
      v-model="dialog"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <img :src="selectedImage" />
    </q-dialog>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="5" />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    name: "product_image",
    required: true,
    label: "Product image",
    align: "left",
  },
  {
    name: "domain",
    align: "left",
    label: "Domain",
    field: "domain",
    sortable: true,
    //   format: (val) => `${val}`,
  },
  {
    name: "product_title",
    align: "left",
    label: "Product title",
    field: "product_title",
  },
  {
    name: "oder_created_at",
    label: "Oder created at",
    field: "oder_created_at",
    align: "right",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "city",
    label: "City",
    align: "center",
    field: "city",
  },
  {
    name: "country",
    label: "Country",
    align: "center",
    field: "country",
  },
];

const rows = [
  {
    product_image:
      "https://hanoicomputercdn.com/media/product/47571_rog_strix_x570_e_gaming_aura_sync_01.png",
    domain: "https://www.hanoicomputer.vn/",
    product_title: "Mainboard ASUS ROG STRIX X570-E GAMING",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam",
  },
  {
    product_image: "https://anphat.com.vn/media/product/35028_i3_10th.jpg",
    domain: "https://www.anphatpc.com.vn/",
    product_title: "CPU Intel Core i3-10100F",
    oder_created_at: "10/01/2022",
    city: "Da Nang",
    country: "Viet Nam",
  },
  {
    product_image:
      "https://hanoicomputercdn.com/media/product/60263_ram_desktop_gskill_trident_z_royal_elite_f4_4000c16d_32gteg_32gb_2x16gb_ddr4_4000mhz_1.jpg",
    domain: "https://www.hanoicomputer.vn/",
    product_title: "Ram Desktop Gskill Trident Z Royal Elite ",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam",
  },
  {
    product_image:
      "https://anphat.com.vn/media/product/22502_ssd_kingston_a400_240gb_1.jpg",
    domain: "https://memoryzone.com.vn/",
    product_title: "SSD Kingston A400 2.5-Inch SATA III 120GB SA400S37/120G",
    oder_created_at: "12/03/2022",
    city: "Ho Chi Minh",
    country: "Viet Nam",
  },
  {
    product_image: "https://anphat.com.vn/media/product/36985_h732__10_.png",
    domain: "https://www.anphatpc.com.vn/",
    product_title:
      "VGA ASUS ROG Strix Radeon RX 6700 XT OC 12GB (ROG-STRIX-RX6700XT-O12G-GAMING)",
    oder_created_at: "12/03/2022",
    city: "Bangkok",
    country: "Thailand",
  },
  {
    product_image:
      "https://thanhcongcomputer.vn/wp-content/uploads/2019/12/may-tinh-choi-game-gia-re-510x510.jpg",
    domain: "https://thanhcongcomputer.vn/",
    product_title:
      "VGA ASUS ROG Strix Radeon RX Bộ Máy Tính CPU CORE I5 9400F,RAM 16GB,VGA GTX 1060 6GB, MAINBOARD B360 XT OC 12GB ",
    oder_created_at: "12/03/2022",
    city: "Seoul",
    country: "Korean",
  },
  {
    product_image:
      "https://product.hstatic.net/1000345160/product/nitro_5_2019__5e68daa8483c4e47a13a2977d2307f39_master.jpg",
    domain: "https://laptopk1.vn/",
    product_title: "VGA ASUS ROG Strix Radeon RX 6700 XT OC 12GB",
    oder_created_at: "12/03/2022",
    city: "Tokio",
    country: "Japan",
  },
];
export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
  data() {
    return {
      selectedImage: "",
      filter: "",
      current: "",
      dialog: "false",
    };
  },
};
</script>

<style scoped>
.recipe-units-table >>> .q-table__top {
  background-color: #33adff;

  color: white;
}
</style>
