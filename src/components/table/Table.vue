<template>
  <div class="q-pa-md">
    <q-table title="Sales" :rows="rows" :columns="columns" row-key="name">
      <!-- <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="row in props.rows" :key="row.id" :props="props">
            <div class="maxText" v-if="col.field === 'domain'">
              <a
                :href="row.value"
                style="text-decoration: none"
                target="_blank"
                >{{ row.value }}</a
              >
            </div>
          </q-td>
        </q-tr>
      </template> -->
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "product_image",
    required: true,
    label: "Product_image",
    align: "left",
    field: (row) => row.product_image,
    format: (val) => `${val}`,
  },
  {
    name: "domain",
    align: "center",
    label: "Domain",
    field: "domain",
    sortable: true,
  },
  {
    name: "product_title",
    align: "center",
    label: "Product title",
    field: "product_title",
  },
  {
    name: "oder_created_at",
    label: "Oder created at",
    field: "oder created at",
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
    product_image: "aaa",
    domain: "https://quasar.dev/layout/layout#qlayout-api",
    product_title: "CPU",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam",
  },
  {
    product_image:
      "https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compres",
    domain: "https://quasar.dev/layout/layout#qlayout-api",
    product_title: "CPU",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam",
  },
  {
    product_image: "aaa",
    domain: "https://quasar.dev/layout/layout#qlayout-api",
    product_title: "CPU",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam",
  },
  {
    product_image: "aaa",
    domain: "https://quasar.dev/layout/layout#qlayout-api",
    product_title: "CPU",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam",
  },
  {
    product_image: "aaa",
    domain: "https://quasar.dev/layout/layout#qlayout-api",
    product_title: "CPU",
    oder_created_at: "12/03/2022",
    city: "Ha Noi",
    country: "Viet Nam122132",
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

<style></style>
