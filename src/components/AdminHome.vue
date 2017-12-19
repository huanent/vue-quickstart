<template>
  <div id='bg'>
    <el-container id='root-container'>
      <el-header>
        <h1>管理系统</h1>
      </el-header>
      <el-container>
        <el-aside>
           <left-nav></left-nav>
        </el-aside>
        <el-main>
          <conent-body></conent-body>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftNav from "./AdminHome/LeftNav";
import ConentBody from "./AdminHome/ContentBody";
export default {
  components: {
    LeftNav,
    ConentBody
  }
};
</script>

<style scoped>
#bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.root-container {
  position: relative;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #324057;
}
.el-header > h1 {
  color: rgb(107, 181, 255);
  line-height: 100%
}
.el-aside {
  height: 100%;
}
.el-main {
  height: 100%;
  padding: 1.5rem;
}
</style>
