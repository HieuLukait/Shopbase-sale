<template>
  <div class="q-pa-md">
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
        style="min-width: 250px; max-width: 300px"
      />
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
     setup () {
    return {
      model: ref(null),

      options: [
        {
          id: 'vn',
          desc: 'Viet Nam',
          inactive: true
        },
        {
          id: 'thai',
          desc: 'Thailand'
        },
        {
          id: 'china',
          desc: 'China'
        },
        {
          id: 'laos',
          desc: 'Laos'
        },
        {
          id: 'japan',
          desc: 'Japan',
        },
        {
          id: 'korea',
          desc: 'Korea',
        }
      ]
    }
  }

}
</script>

<style scoped>
.text-filter{
    padding: 20px;
    font: 16px;
}
</style>