<template>
  <div id='bg'>
    <el-container id='root-container'>
      <el-header>
        <top-bar></top-bar>
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
import LeftNav from "@/components/AdminHome/LeftNav";
import ConentBody from "@/components/AdminHome/ContentBody";
import TopBar from "@/components/AdminHome/TopBar";
export default {
  components: {
    LeftNav,
    ConentBody,
    TopBar
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
.el-aside {
  height: 100%;
}
.el-main {
  height: 100%;
  padding: 1.5rem;
}
</style>
