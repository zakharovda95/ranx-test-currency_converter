<template>
  <div class="converter-page">
    <TheConverter />
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
}
</style>
