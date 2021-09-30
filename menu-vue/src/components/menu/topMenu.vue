<!-- src/menu/topMenu.vue -->
<template>
  <div id="top-menu">
    <img class="logo" v-if="radio" :src="logoPath" />
    <el-button @click="radio = true">默认按钮</el-button>
    <p class="name">{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: "topMenu",
  props: ["logoPath", "name"],
  data() {
    return {
      radio: false,
    };
  },
};
</script>
<style lang="scss" scoped>
$topMenuWidth: 80px;
$logoWidth: 50px;
$bg-color: #409eff;
$name-color: #fff;
$name-size: 18px;
#top-menu {
  height: $topMenuWidth;
  text-align: left;
  background-color: $bg-color;
  padding: 20px 20px 0px 20px;
  .logo {
    width: $logoWidth;
    display: inline-block;
  }
  .name {
    display: inline-block;
    vertical-align: bottom;
    color: $name-color;
    font-size: $name-size;
  }
}
</style>
