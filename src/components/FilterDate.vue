<template>
  <div class="flex justify">
    <div class="text-filter">Oder created at</div>
    <div class="q-pa-md" style="">
      <q-input filled v-model="date1" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date1">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="text-filter">To</div>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input filled v-model="date2" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date2">
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
</template>

<script>
export default {
  data() {
    return {
      date1: "",
      date2: "",
    };
  },
};
</script>

<style>
.text-filter {
  padding: 30px 30px 0 30px;
  font-size: 16px;
}
</style>
