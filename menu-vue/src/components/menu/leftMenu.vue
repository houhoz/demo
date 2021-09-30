<!-- src/menu/leftMenu.vue -->
<template>
  <div id="left-menu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      :collapse="false"
    >
      <MenuItem :route="routesInfo"></MenuItem>
    </el-menu>
  </div>
</template>
<script>
import MenuItem from "./menuItem";
export default {
  name: "LeftMenu",
  components: { MenuItem },
  computed: {
    routesInfo: function() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    }
  }
};
</script>
<style lang="scss">
// 使左边的菜单外层的元素高度充满屏幕
#left-container {
  position: absolute;
  top: 100px;
  bottom: 0px;
  // 使菜单高度充满屏幕
  #left-menu,
  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>
