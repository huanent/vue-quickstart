<template>
  <div class="top-bar">
    <div class="logo">
      <h1>LOGO</h1>
    </div>
    <div class="setting-btn">
      <el-popover
        ref="setting-btn-popover"
        placement="bottom"
        trigger="hover">
        <el-button type="text" class='setting-popover-item'>修改密码</el-button>
        <el-button type="text" class='setting-popover-item'>退出</el-button>
      </el-popover>
      <el-button type="text" v-popover:setting-btn-popover>个人中心 <i class="el-icon-arrow-down"/></el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-bar {
  height: 100%;
}

.logo {
  height: 100%;
  float: left;
  color: #409eff;
  display: flex;
  align-items: center;
}

.setting-btn {
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
}
.setting-popover-item {
  display: block;
}
</style>
