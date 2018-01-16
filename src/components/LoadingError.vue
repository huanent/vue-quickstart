<template>
  <div class="error-pnl">
    <i class="el-icon-error"></i>
      <el-collapse>
        <el-collapse-item name="1" title="加载页面出现错误，展开查看错误详情！">
          <p>{{errorDetails}}</p>
        </el-collapse-item>
      </el-collapse>
      <el-button type="danger" @click="reload">点击重试</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      this.$emit("reload");
    }
  },props:{
    errorDetails:String
  }
};
</script>

<style scoped>
.error-pnl {
  text-align: center;
}
.error-pnl > .el-button {
  margin-top: 2rem;
}
.error-pnl > i {
  font-size: 10rem;
  color: #ddd;
  margin: 2rem;
}
.error-pnl > .el-collapse {
  max-width: 30rem;
  margin: 0 auto;
}
</style>
