<template>
  <div class="q-pa-md">
    <div class="flex justify">
      <div class="text-filter flex justify">
        Oder created at &nbsp;&nbsp;&nbsp;
        <q-input
          filled
          v-model="startAt"
          mask="date"
          :rules="['date']"
          style="max-width: 200px"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="startAt">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div class="text-filter flex justify">
        To &nbsp;&nbsp;&nbsp;
        <q-input
          filled
          v-model="endAt"
          mask="date"
          :rules="['date']"
          style="max-width: 200px"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="endAt">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <div class="text-filter flex justify" style="padding-left: 37px">
          Country &nbsp;&nbsp;&nbsp;
          <q-select
            filled
            v-model="country"
            :options="countries"
            style="width: 200px"
          />
        </div>
      </div>
    </div>
    <q-table
      class="recipe-units-table my-sticky-header-table"
      title-class="table-title"
      title="Sales"
      :rows="sales"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input
          dense
          debounce="400"
          v-model="country"
          placeholder="Search"
          @keyup.enter="getSales(country)"
        >
          <template v-slot:append>
            <q-icon name="search" @click="getSales(country)" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <span v-if="col.name == 'domain'"></span>
            <span v-else-if="col.name == 'product_title'"
              ><a
                style="text-decoration: none; color: #000000"
                :href="`${props.row.domain}/${props.row.product_handle}`"
              >
                {{ col.value }}
              </a></span
            >

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
                style="text-decoration: none; color: #000000"
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
      <q-pagination
        v-if="sales"
        v-model="page"
        :max-pages="5"
        :max="maxPage"
        :ellipses="false"
        :boundary-numbers="false"
        direction-links
        unelevated
      />
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

    //   format: (val) => `${val}`,
  },
  {
    name: "product_title",
    align: "left",
    label: "Product title",
    field: "product_title",
  },
  {
    name: "order_created_at",
    label: "Order created at",
    field: "order_created_at",
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

const rows = [];
export default {
  data() {
    return {
      columns,
      rows,
      selectedImage: "",
      filter: "",
      country: null,
      dialog: "false",
      sales: [],
      maxPage: null,
      page: 1,
      startAt: "",
      endAt: "",
      countries: [],
    };
  },
  mounted() {
    this.getSales();
    this.getCountry();
  },
  methods: {
    getSales() {
      this.$myApi.sale
        // eslint-disable-next-line no-undef
        .getSales(this.page, this.country, this.startAt, this.endAt)
        .then((res) => {
          this.sales = res.data.data;
          this.maxPage = res.data.meta.last_page;
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
    getCountry() {
      this.$myApi.sale
        // eslint-disable-next-line no-undef
        .getCountry()
        .then((res) => {
          this.countries = res.data;
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
  watch: {
    page(newVal) {
      this.getSales(newVal);
    },
    startAt(newVal) {
      this.getSales(newVal);
    },
    endAt(newVal) {
      this.getSales(newVal);
    },
    country(newVal) {
      this.getSales(newVal);
    },
  },
};
</script>

<style scoped>
.recipe-units-table >>> .q-table__top {
  background-color: #33adff;

  color: white;
}
.text-filter {
  align-items: center;
  font-size: 16px;
}
</style>
