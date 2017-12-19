<template>
  <div id='content-body'>
      <el-tabs :value="activeItem" >
        <el-tab-pane label="首页" name="adminIndex">
          <admin-index></admin-index>
        </el-tab-pane>
           <el-tab-pane v-for="item in tabs" :label="item.label" :key="item.index" :name="item.index"  :closable="item.closable">
               <component :is='item.component'></component>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import AdminIndex from "./AdminIndex";
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      tabs: "tabs",
      activeItem: "activeItem"
    })
  },
  components: {
    AdminIndex
  }
};
</script>

<style scoped>

</style>
