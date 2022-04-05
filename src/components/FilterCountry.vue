<template>
  <div class="q-pa-md filter-country">
    <div class="flex">
      <div class="q-gutter-md row items-start">
        <div class="text-filter">Country</div>
        <q-select
          filled
          v-model="model"
          :options="options"
          option-value="id"
          option-label="desc"
          option-disable="inactive"
          emit-value
          map-options
          style="min-width: 240px; max-width: 300px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      model: ref(null),

      options: [
        {
          id: "vn",
          desc: "Viet Nam",
        },
        {
          id: "thai",
          desc: "Thailand",
        },
        {
          id: "china",
          desc: "China",
        },
        {
          id: "laos",
          desc: "Laos",
        },
        {
          id: "japan",
          desc: "Japan",
        },
        {
          id: "korea",
          desc: "Korea",
        },
      ],
    };
  },

  methods: {
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.options = stringOptions;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.options = stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
};
</script>

<style scoped>
.text-filter {
  padding: 20px;
  font: 16px;
}
.filter-country {
  padding-left: 70px;
}
</style>
