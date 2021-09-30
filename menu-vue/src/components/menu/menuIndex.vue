<!-- src/menu/menuIndex.vue -->
<template>
  <div id="menu-index">
    <el-container>
      <el-header>
        <TopMenu :logoPath="logoPath" :name="name"></TopMenu>
      </el-header>
      <el-container id="left-container">
        <el-aside width="200px">
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from "./leftMenu";
import TopMenu from "./topMenu";
export default {
  name: "MenuIndex",
  components: { LeftMenu, TopMenu },
  data() {
    return {
      logoPath: require("../../assets/logo.png"),
      name: "员工管理系统"
    };
  }
};
</script>
<style lang="scss">
#menu-index {
  .el-header {
    padding: 0px;
  }
}
</style>
