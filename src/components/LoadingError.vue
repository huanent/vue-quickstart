<template>
  <div>
      <div><slot>载入错误。。</slot></div>
      <button @click="reload">重新载入</button>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      this.$emit("reload");
    }
  }
};
</script>

<style>

</style>
