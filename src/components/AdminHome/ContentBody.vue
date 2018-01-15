<template>
  <div id='content-body'>
      <el-tabs :value="activeItem" @tab-remove="closeTab">
        <el-tab-pane label="首页" name="adminIndex">
          <admin-index></admin-index>
        </el-tab-pane>
           <el-tab-pane v-for="item in tabs" :label="item.label" :key="item.index" :name="item.index"  :closable="item.closable">
               <async-component :componentPath='item.component' :delay="500"></async-component>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import AdminIndex from "@/components/AdminIndex";
import { mapActions, mapState } from "vuex";
import AsyncComponent from "@/components/AsyncComponent";

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
    })
  },
  components: {
    AdminIndex,
    AsyncComponent
  }
};
</script>

