<template>
   <el-tabs :value="activeItem" @tab-remove="closeTab" class='content-body' @tab-click="tabClick">
        <el-tab-pane label="首页" name="adminIndex">
          <admin-index></admin-index>
        </el-tab-pane>
           <el-tab-pane v-for="item in tabs" :label="item.label" :key="item.index" :name="item.index"  :closable="item.closable">
               <async-component :componentPath='item.component'></async-component>
        </el-tab-pane>
   </el-tabs>
</template>

<script>
import AdminIndex from "../AdminIndex";
import { mapActions, mapState,mapMutations } from "vuex";
import AsyncComponent from "../AsyncComponent";

export default {
  computed: {
    ...mapState("menu", {
      tabs: "tabs",
      activeItem: "activeItem"
    })
  },
  methods: {
    ...mapActions("menu", {
      closeTab: "closeTab"
    }),
    ...mapMutations("menu",{
      switchTab:"switchTab"
    }),
    tabClick(e){
      this.switchTab(e.name)
    }
  },
  components: {
    AdminIndex,
    AsyncComponent
  }
};
</script>
<style scoped>
.content-body {
  height: 100%;
}
</style>


