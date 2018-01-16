<template>
  <div v-loading="loading" class="loading">
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  min-height: 10rem;
}
</style>
