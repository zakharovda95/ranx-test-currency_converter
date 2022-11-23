<template>
  <div class="converter-page">
    <TheConverter class="converter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import TheConverter from '@/components/converter/TheConverter';

export default defineComponent({
  components: { TheConverter },
});
</script>

<style scoped lang="scss">
.converter-page {
  padding: 12px;

  .converter {
    margin-top: 24px;
  }
}
</style>
